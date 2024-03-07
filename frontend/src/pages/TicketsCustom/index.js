import React from "react";
import { useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles, useTheme } from "@material-ui/core/styles"; // Importe useTheme aqui

import TicketsManager from "../../components/TicketsManagerTabs/";
import Ticket from "../../components/Ticket/";

import logo_roxa from "../../assets/logo.png";
import logo_laranja from "../../assets/logo_laranja.png";

import { i18n } from "../../translate/i18n";

const useStyles = makeStyles((theme) => ({
  chatContainer: {
    flex: 1,
    // backgroundColor: "#eee",
    padding: theme.spacing(1), //Aqui ele ajusta espaço na tela de ticket
    height: `calc(100% - 48px)`,
    overflowY: "hidden",
  },

  chatPapper: {
    // backgroundColor: "red",
    display: "flex",
    height: "100%",
  },

  contactsWrapper: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    overflowY: "hidden",
  },
  messagesWrapper: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
  },
  welcomeMsg: {
    backgroundColor: theme.palette.boxticket, //DARK MODE PLW DESIGN//
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "100%",
    textAlign: "center",
  },
}));

const TicketsCustom = () => {
  const classes = useStyles();
  const { ticketId } = useParams();
  const theme = useTheme(); // Obtenha o objeto theme usando useTheme

  return (
    <div className={classes.chatContainer}>
      <div className={classes.chatPapper}>
        <Grid container spacing={0}>
          <Grid item xs={4} className={classes.contactsWrapper}>
            <TicketsManager />
          </Grid>
          <Grid item xs={8} className={classes.messagesWrapper}>
            {ticketId ? (
              <>
                <Ticket />
              </>
            ) : (
              <Paper square variant="outlined" className={classes.welcomeMsg}>
                <div>
                  <center>
                    <img
                      style={{ margin: "0 auto", width: "80%" }}
                      src={theme.mode === 'light' ? logo_roxa : logo_laranja} // Use theme.mode aqui
                      alt="theme.mode"
                    />
                  </center>
                </div>
              </Paper>
            )}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default TicketsCustom;
