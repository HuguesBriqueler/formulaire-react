import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import PhoneIcon from "@mui/icons-material/Phone";
import WebIcon from "@mui/icons-material/Web";

import { contact } from "../data/coordinate";

function Details() {
  return (
    <Box
      component="form"
      sx={{
        mx: "auto",
        width: 400,
        my: 2,
        border: 1,
        borderRadius: 1,
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Box
        sx={{
          textAlign: "center",
          fontSize: "2rem",
          my: 1,
        }}
      >
        Coordonnées
      </Box>

      <Box
        sx={{
          textAlign: "center",
        }}
      >
        {contact.map((item) => {
          return (
            <Box sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              {item.icon}
              <TextField
                label={item.label}
                sx={{
                  mx: 1,
                  width: 150,
                }}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default Details;
