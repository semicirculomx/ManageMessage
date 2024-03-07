#!/bin/bash
clear

printf "\n\n"

printf "${CYAN_LIGHT}";

printf ${CYAN_LIGHT}" █████╗ ██╗   ██╗████████╗ ██████╗  █████╗ ████████╗███████╗███╗   ██╗██████╗ ███████╗ \n";
printf ${CYAN_LIGHT}"██╔══██╗██║   ██║╚══██╔══╝██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝████╗  ██║██╔══██╗██╔════╝ \n";
printf ${CYAN_LIGHT}"███████║██║   ██║   ██║   ██║   ██║███████║   ██║   █████╗  ██╔██╗ ██║██║  ██║█████╗   \n";
printf ${CYAN_LIGHT}"██╔══██║██║   ██║   ██║   ██║   ██║██╔══██║   ██║   ██╔══╝  ██║╚██╗██║██║  ██║██╔══╝   \n";
printf ${CYAN_LIGHT}"██║  ██║╚██████╔╝   ██║   ╚██████╔╝██║  ██║   ██║   ███████╗██║ ╚████║██████╔╝███████╗ \n";
printf ${CYAN_LIGHT}"╚═╝  ╚═╝ ╚═════╝    ╚═╝    ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═══╝╚═════╝ ╚══════╝ \n";

printf "            \033[1;33m        ©lucassaud\n";
printf "${NC}";

printf "\n"

echo "ATUALIZANDO PARA A VERSÃO MAIS RECENTE..."
echo " "

sleep 2

echo " "
echo "BAIXANDO AS ATUALIZAÇÕES"
echo " "

sleep 2

git fetch
git pull

echo " "
echo "ACESSANDO O BACKEND"
echo " "

sleep 2

cd backend

echo " "
echo "ATUALIZANDO OS ARQUIVOS DO BACKEND"
echo " "

sleep 2

sudo rm -rf node_modules
npm install
sudo rm -rf dist
npm run build

echo " "
echo "EXECUTANDO O DB:MIGRATE"
echo " "

sleep 2

npx sequelize db:migrate

echo " "
echo "ACESSANDO O FRONTEND"
echo " "

sleep 2

cd ../frontend

sleep 2

echo " "
echo "ATUALIZANDO OS ARQUIVOS DO FRONTEND"
echo " "

sleep 2

sudo rm -rf node_modules
npm install
rm -rf build
npm run build

echo " "
echo "RESTART PM2"
echo " "

sleep 2

pm2 restart all

echo " "
echo "AUTOATENDE ATUALIZADO COM SUCESSO!!!"
echo " "
