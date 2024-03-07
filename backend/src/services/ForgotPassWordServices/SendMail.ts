import nodemailer from "nodemailer";
import sequelize from "sequelize";
import database from "../../database";
import Setting from "../../models/Setting";

interface UserData {
  companyId: number;
  // Outras propriedades que você obtém da consulta
}

const SendMail = async (email: string, tokenSenha: string) => {
  const companyId = 1; // Defina o companyId como 1

  // Verifique se o email existe no banco de dados
  const { hasResult, data } = await filterEmail(email);

  if (!hasResult) {
    return { status: 404, message: "Email não encontrado" };
  }

  const userData = data[0][0] as UserData;

  if (!userData || userData.companyId === undefined) {
    return { status: 404, message: "Dados do usuário não encontrados" };
  }

  // Busque as configurações de SMTP do banco de dados para a companyId especificada
  const urlSmtpSetting = await Setting.findOne({
    where: {
      companyId,
      key: 'smtpauth',
    },
  });
  const userSmtpSetting = await Setting.findOne({
    where: {
      companyId,
      key: 'usersmtpauth',
    },
  });
  const passwordSmtpSetting = await Setting.findOne({
    where: {
      companyId,
      key: 'clientsecretsmtpauth',
    },
  });

  const portSmtpSetting = await Setting.findOne({
    where: {
      companyId,
      key: 'smtpport',
    },
  });

  const urlSmtp = urlSmtpSetting.value;
  const userSmtp = userSmtpSetting.value;
  const passwordSmpt = passwordSmtpSetting.value;
  const fromEmail = userSmtp; // Defina o email de origem como o usuário SMTP
  const portSmtp = portSmtpSetting.value;

  const transporter = nodemailer.createTransport({
    host: urlSmtp,
    port: Number(portSmtp), // Defina a porta como 587 (ou outra conforme necessário)
    secure: false, // O Gmail requer secure como false
    auth: {
      user: userSmtp,
      pass: passwordSmpt
    }
  });

  if (hasResult === true) {
    const { hasResults, datas } = await insertToken(email, tokenSenha);

    async function sendEmail() {
      try {
        const mailOptions = {
          from: fromEmail,
          to: email,
          subject: "Redefinição de Senha",
          text: `Olá,\n\nVocê solicitou a redefinição de senha para sua conta, utilize o seguinte Código de Verificação para concluir o processo de redefinição de senha:\n\nCódigo de Verificação: ${tokenSenha}\n\nPor favor, copie e cole o Código de Verificação no campo 'Código de Verificação'.\n\nSe você não solicitou esta redefinição de senha, por favor, ignore este e-mail.\n\n\nAtenciosamente`
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("E-mail enviado: " + info.response);
      } catch (error) {
        console.log(error);
      }
    }

    sendEmail();
  }
};

// Função para verificar se o email existe no banco de dados
const filterEmail = async (email: string) => {
  console.log("Verificando e-mail:", email); // Adicione para verificar o e-mail sendo consultado
  const sql = `SELECT * FROM "Users" WHERE email ='${email}'`;
  const result = await database.query(sql, { type: sequelize.QueryTypes.SELECT });
  console.log("Resultado da consulta:", result); // Adicione para verificar o resultado da consulta
  return { hasResult: result.length > 0, data: [result] };
};


const insertToken = async (email: string, tokenSenha: string) => {
  const sqls = `UPDATE "Users" SET "resetPassword"= '${tokenSenha}' WHERE email ='${email}'`;
  const results = await database.query(sqls, { type: sequelize.QueryTypes.UPDATE });
  return { hasResults: results.length > 0, datas: results };
};

export default SendMail;
