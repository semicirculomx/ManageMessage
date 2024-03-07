import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import toastError from "../../errors/toastError";
import api from "../../services/api";

import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import { AuthContext } from "../../context/Auth/AuthContext";

import { Button, Divider, } from "@material-ui/core";

const VcardPreview = ({ contact, number }) => {
  const history = useHistory();
  const { user } = useContext(AuthContext);

  const companyId = localStorage.getItem("companyId");

  const [selectedContact, setContact] = useState({
    id: 0,
    name: "",
    number: 0,
    profilePicUrl: ""
  });

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const fetchContacts = async () => {
        try {
          let contactObj = {
            name: contact,
            number,
            email: ""
          }
          const { data } = await api.post("/contacts/findOrCreate", contactObj);
          setContact(data)

        } catch (err) {
          console.log(err)
          toastError(err);
        }
      };
      fetchContacts();
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [contact, number]);

  const handleNewChat = async () => {
    try {
      const { data: ticket } = await api.post("/tickets", {
        contactId: selectedContact.id,
        userId: user.id,
        status: "open",
        companyId: companyId
      });
      history.push(`/tickets/${ticket.uuid}`);
    } catch (err) {
      toastError(err);
    }
  }

  return (
    <>
      <div style={{
        minWidth: "250px",
        maxWidth: "350px",
        marginTop: '8px',
        backgroundColor: '#ffffff',
        boxShadow: "0 1px 1px #b3b3b3",
        borderRadius: "4px"
      }}>
        <Box
        // backgroundColor="#ffffff"
        >
          <Box
            display="flex"
            padding={1}
            justifyContent="space-around"
            alignItems="center"
          >
            <Avatar src={selectedContact?.profilePicUrl} />

            <Typography
              style={{ marginTop: "12px", marginLeft: "10px", fontWeight: 'bolder' }}

            >
              {selectedContact?.name}
            </Typography>
          </Box>
          <Box
            display="flex"
            padding={1}
            justifyContent="space-between"
            alignItems="center"
          >
            <Divider />
            <Button
              fullWidth
              color="primary"
              variant='outlined'
              onClick={handleNewChat}
              disabled={!selectedContact?.number}
            >
              Conversar
            </Button>
          </Box>
        </Box>
      </div>
    </>
  );

};

export default VcardPreview;