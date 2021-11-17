import { useState } from 'react';
import './App.css';
import {TextField, MenuItem, IconButton} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';



const selectReseauBox = [
  {value: "Facebook", label: "Facebook"},
  {value: "Twitter", label: "Twitter"},
  {value: "Instagram", label: "Instagram"},
  {value: "Linkedin", label: "Linkedin"},
  {value: "WhatsApp", label: "WhatsApp"},
  {value: "Snapchat", label: "Snapchat"},
  {value: "Messenger", label: "Messenger"},
  {value: "Pinterest", label: "Pinterest"},
  {value: "TikTok", label: "TikTok"},
  {value: "Discord", label: "Discord"},
  ]

  
  
  function App() {
  const [reseaux, setReseaux] = useState(selectReseauBox[0].value);
  const [pseudoReseaux, setPseudoReseaux] = useState("");

  return (
    <div className="App">
      <div className="title">
        <h1>Formulaire d'inscription</h1>
      </div>

{/* ----------------Container 1 ----------------------- */}
      <h2>Partie 1</h2>
      <div class="files">
        <div class="file">
          <label for="Commercepicturebox">Choisi la photo du commerce:</label>
          <input class="inputfile" type="file" id="Commercepicturebox" name="commerce" accept="image/png, image/jpg"/>
        </div>

        <div class="file">
          <label for="Logopicturebox">Choisi la photo du logo:</label>
          <input class='inputfile' type="file" id="Logopicturebox" name="logo" accept="image/png, image/jpg"/>
        </div>
      </div>

{/* ----------------Container 2 ----------------------- */}
      <h2>Partie 2</h2>
      <div className="form">

        <div class="container">
          <span>&#9993;</span>
          <input type="text" id="Emailbox" class="email" placeholder="Email"/>
        </div>

        <div class="container">
          <span>&#9993;</span>
          <input type="text" id="Emailconfirmbox" placeholder="Email (visible)"/>
        </div>

        <div class="container">
          <span>&#8861;</span>
          <input type="password" id="Passwordbox" placeholder="Mot de passe"/>
        </div>

        <div class="container">
          <span>&#8860;</span>
          <input type="password" id="Passwordconfirmbox" placeholder="Confirmation"/>
        </div>

        <div class="container">
          <span>&#9750;</span>
          <input type="text" id="Commercebox" placeholder="Nom du commerce"/>
        </div>

        <div class="container">
          <span>&#9786;</span>
          <input type="text" id="Adressebox" placeholder="Adresse"/>
        </div>

        <div class="container">
          <span>&#9786;</span>
          <input type="text" id="Adressevisiblebox" placeholder="Adresse (visible)"/>
        </div>

        <div class="container">
          <span>&#9743;</span>
          <input class="tel" type="number" id="Telbox" placeholder="Téléphone"/>
        </div>

        <div class="container">
          <span>&#10155;</span> 
          <input type="text" id="Webbox" placeholder="Web site"/>
        </div>

        <div class="container">
          <span>&#84;</span> 
          <select id="Typebox">
            <option value="">Sélectionner votre type de commerce</option>
            <option value="Agence de Voyage">Agence de Voyage</option>
            <option value="Alimentation Bio">Alimentation Bio</option>
            <option value="Alimentation Générale">Alimentation Générale</option>
            <option value="Alimentation Spécialisée">Alimentation Spécialisée</option>
            <option value="Animalerie">Animalerie</option>
            <option value="Armurerie">Armurerie</option>
            <option value="Artisan">Artisan</option>
            <option value="Artisan Modiste">Artisan Modiste</option>
            <option value="Autres">Autres</option>
            <option value="Bar">Bar</option>
            <option value="Bien d'occasion">Bien d'occasion</option>
            <option value="Bijouterie">Bijouterie</option>
            <option value="Bijouterie fantaisie">Bijouterie fantaisie</option>
            <option value="Boucherie Charcuterie">Boucherie Charcuterie</option>
            <option value="Boulangerie">Boulangerie</option>
            <option value="Brasserie Caviste">Brasserie Caviste</option>
            <option value="Chapellerie Chemiserie">Chapellerie Chemiserie</option>
            <option value="Chaussure">Chaussure</option>
            <option value="Concept Store">Concept Store</option>
            <option value="Conciergerie Location">Conciergerie Location</option>
            <option value="Controle Technique">Controle Technique</option>
            <option value="Cordonnerie">Cordonnerie</option>
            <option value="Disquaire">Disquaire</option>
            <option value="Electroménager">Electroménager</option>
            <option value="Epicerie internationale Goodies">Epicerie internationale Goodies</option>
            <option value="Epicerie Vrac">Epicerie Vrac</option>
            <option value="Esthétique">Esthétique</option>
            <option value="Etang">Etang</option>
            <option value="Fleuriste">Fleuriste</option>
            <option value="Friperie">Friperie</option>
            <option value="Frountz Attitude">Frountz Attitude</option>
            <option value="Horlogerie">Horlogerie</option>
            <option value="Hotel Restaurant">Hotel Restaurant</option>
            <option value="Informatique">Informatique</option>
            <option value="Jardinerie">Jardinerie</option>
            <option value="Jeux Jouets">Jeux Jouets</option>
            <option value="Librairie">Librairie</option>
            <option value="Lingerie">Lingerie</option>
            <option value="Magasin spécialisé américain">Magasin spécialisé américain</option>
            <option value="Maroquinerie">Maroquinerie</option>
            <option value="Mercerie">Mercerie</option>
            <option value="Mobilier">Mobilier</option>
            <option value="Multi Commerce X3">Multi Commerce X3</option>
            <option value="Musique">Musique</option>
            <option value="Numismatique Pièce de monnaie Collection">Numismatique Pièce de monnaie Collection</option>
            <option value="Opticien">Opticien</option>
            <option value="Papeterie">Papeterie</option>
            <option value="Parapharmacie">Parapharmacie</option>
            <option value="Parfumerie">Parfumerie</option>
            <option value="Pret à porter">Pret à porter</option>
            <option value="Photographe">Photographe</option>
            <option value="Pizzeria">Pizzeria</option>
            <option value="Puériculture">Puériculture</option>
            <option value="Quincaillerie">Quincaillerie</option>
            <option value="Restaurant">Restaurant</option>
            <option value="Salon de coiffure">Salon de coiffure</option>
            <option value="Snack Friterie">Snack Friterie</option>
            <option value="Souvenirs">Souvenirs</option>
            <option value="Sport Loisirs">Sport Loisirs</option>
            <option value="Transport Logistique">Transport Logistique</option>    
          </select>
        </div>
      </div>
      
      <h2>Partie 3</h2>
      {/* <select onChange={event => setReseaux(event.target.value)}>
        <option value="">Choisir un réseau</option>
        {selectReseauBox.map(reseauBoxOption => <option value={reseauBoxOption.value}>{reseauBoxOption.label}</option>)}
      </select> */}
      <TextField
        select
        label="Choisir un réseau"
        value={reseaux}
        onChange={event => setReseaux(event.target.value)}
      >
        {selectReseauBox.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
      value={pseudoReseaux}
      onChange={event => setPseudoReseaux(event.target.value)}
      />

      <IconButton color="primary">
        <AddIcon/>
      </IconButton>

    </div>
  );
}

export default App;
