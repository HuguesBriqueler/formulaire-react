import { useState } from "react";
import "./App.css";

import { Container, CssBaseline } from "@mui/material";

import Title from "./components/Title";
import Media from "./components/Media";
import Details from "./components/Details";
import Social from "./components/Social";
import { initialChoixReseau } from "./data/socialNetworks";
import { business } from "./data/businessType";

function App() {
  // ---------- Social Networks Manager ----------
  const [choixReseau, setChoixReseau] = useState([{ ...initialChoixReseau() }]);

  const handleChoixReseau = (event, target, currentIndex) => {
    const tempChoixReseau = [...choixReseau];
    tempChoixReseau[currentIndex][target] = event.target.value;
    setChoixReseau(tempChoixReseau);
  };
  // ---------- Contact Info Manager ----------
  const businessDetail = {
    email: "",
    visibleEmail: "",
    password: "",
    name: "",
    adress: "",
    visibleAdress: "",
    phone: "",
    webSite: "",
    businessType: ""
  }
  
  const [businessInfo, setBusinessInfo] = useState(businessDetail);

  const handleBusinessInfo = (event, target) => {
    const tempBusiness = {...businessInfo}
    tempBusiness[target] = event.target.value
    setBusinessInfo(tempBusiness);
  };

  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="sm">
        <Title />
        {/* ----------------Container 1 ----------------------- */}
        <Media />

        {/* ----------------Container 2 ----------------------- */}
        <Details
          businessInfo={businessInfo}
          handleBusinessInfo={handleBusinessInfo}
        />

        {/* --------------- Container 3 ----------------------- */}
        <Social
          choixReseau={choixReseau}
          handleChoixReseau={handleChoixReseau}
          setChoixReseau={setChoixReseau}
        />
      </Container>
    </div>
  );
}

export default App;
