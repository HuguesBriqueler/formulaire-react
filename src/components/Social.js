import React from "react";
import { TextField, MenuItem } from "@mui/material";

import AddButton from "./AddButton";
import { selectReseauBox, initialChoixReseau } from "../data/socialNetworks";

function Social({ choixReseau, handleChoixReseau, setChoixReseau }) {
  const handleButton = () => {
    setChoixReseau([...choixReseau, { ...initialChoixReseau() }]);
  };

  return (
    <div>
      <h2>Reseaux Sociaux</h2>
      {choixReseau.map(({ reseau, url, tempId }, indexChoixReseau) => (
        <div key={tempId}>
          <TextField
            select
            label="Choisir un réseau"
            value={reseau}
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
    </div>
  );
}

export default Social;
