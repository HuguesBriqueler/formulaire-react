import React from "react";
import Box from "@mui/material/Box";
import { MenuItem } from "@mui/material";
import TextField from "@mui/material/TextField";
import AssignmentIcon from '@mui/icons-material/Assignment';

import { contact } from "../data/coordinate";
import { businessInfo } from "../data/businessInfo";
import { business } from "../data/businessType"

function Details({businessInfo, handleBusinessInfo}) {
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
                value={businessInfo[item.target]}
                onChange={(event) => 
                  handleBusinessInfo(event, item.target)
                }
                sx={{
                  mx: 1,
                  width: 150,
                }}
              />
            </Box>
          );
        })}
        <Box sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
          <AssignmentIcon />
          <TextField
              select
              label="Type de commerce"
              value={businessInfo["businessType"]}
              sx={{
                mx: 1,
                width:150
              }}
              onChange={(event) =>
                handleBusinessInfo(event, "businessType" )
              }
            >
              {business.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
              ""
            </TextField>
        </Box>
      </Box>
    </Box>
  );
}

export default Details;
