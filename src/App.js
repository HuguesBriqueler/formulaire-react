import { useState } from "react";
import "./App.css";

import { Container, CssBaseline } from "@mui/material";

import Title from "./components/Title";
import Media from "./components/Media";
import Details from "./components/Details";
import Social from "./components/Social";
import { initialChoixReseau } from "./data/socialNetworks";

function App() {
  // const [reseaux, setReseaux] = useState(selectReseauBox[0].value);
  // const [pseudoReseaux, setPseudoReseaux] = useState("");
  const [choixReseau, setChoixReseau] = useState([{ ...initialChoixReseau() }]);

  const handleChoixReseau = (event, target, currentIndex) => {
    const tempChoixReseau = [...choixReseau];
    tempChoixReseau[currentIndex][target] = event.target.value;
    setChoixReseau(tempChoixReseau);
  };

  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="sm">
        <Title />
        {/* ----------------Container 1 ----------------------- */}
        <Media />

        {/* ----------------Container 2 ----------------------- */}
        <Details />

        {/* --------------- Container 3 ----------------------- */}
        <Social
          choixReseau={choixReseau}
          handleChoixReseau={handleChoixReseau}
          setChoixReseau={setChoixReseau}
        />
      </ Container>
    </div>
  );
}

export default App;
