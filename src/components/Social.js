import React from "react";
import { TextField, MenuItem, Box } from "@mui/material";

import AddButton from "./AddButton";
import { selectReseauBox, initialChoixReseau } from "../data/socialNetworks";

function Social({ choixReseau, handleChoixReseau, setChoixReseau }) {
  const handleButton = () => {
    setChoixReseau([...choixReseau, { ...initialChoixReseau() }]);
  };

  return (
    <Box
      sx={{
          textAlign: "center",
        }}
    >
      <Box
        sx={{
          textAlign: "center",
          fontSize: "2rem",
          my: 1,
        }}
      >
        Reseaux sociaux
      </Box>
      {choixReseau.map(({ reseau, url, tempId }, indexChoixReseau) => (
        <div key={tempId}>
          <TextField
            select
            label="Choisir un réseau"
            value={reseau}
            sx={{
              mx: 1,
              width:150
            }}
            onChange={(event) =>
              handleChoixReseau(event, "reseau", indexChoixReseau)
            }
          >
            {selectReseauBox.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
            ""
          </TextField>

          <TextField
            value={url}
            onChange={(event) =>
              handleChoixReseau(event, "url", indexChoixReseau)
            }
          />
          {choixReseau.length === indexChoixReseau + 1 && (
            <AddButton onClick={handleButton} color="primary" />
          )}
        </div>
      ))}
    </Box>
  );
}

export default Social;
