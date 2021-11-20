import React, { useState } from "react";
import { Grid, Box, ButtonBase, Paper } from "@mui/material";
import { height } from "@mui/system";

function Media() {
  const [devanturePic, setDevanturePic] = useState(null);
  const [logoPic, setLogoPic] = useState(null);

  const handleDevanture = () => {};

  const handleLogo = () => {};

  return (
    <div>
      <h2>Medias</h2>
      <Grid container>
        <Grid item xs={6} direction="column">
          <Box>
            Devanture :
            {/* <input
            class="inputfile"
            type="file"
            id="Commercepicturebox"
            name="commerce"
            accept="image/png, image/jpg"
          /> */}
          </Box>
          <ButtonBase
            sx={{ "& > :not(style)": { m: 1, width: 128, height: 128 } }}
            onClick={handleDevanture}
          >
            <Paper elevation={1}>
              <img alt="Devanture" src={devanturePic} />
            </Paper>
          </ButtonBase>
        </Grid>

        <Grid item xs={6} direction="column">
          <Box>
            Logo :
            {/* <input
            class="inputfile"
            type="file"
            id="Logopicturebox"
            name="logo"
            accept="image/png, image/jpg"
          /> */}
          </Box>
          <ButtonBase
            sx={{ "& > :not(style)": { m: 1, width: 128, height: 128 } }}
            onClick={handleLogo}
          >
            <Paper elevation={1}>
              <img alt="Logo" src={logoPic} />
            </Paper>
          </ButtonBase>
        </Grid>
      </Grid>
    </div>
  );
}

export default Media;
