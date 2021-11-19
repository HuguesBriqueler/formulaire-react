import React from "react";

function Media() {
  return (
    <div>
      <h2>Medias</h2>
      <div class="files">
        <div class="file">
          <label for="Commercepicturebox">Choisi la photo du commerce:</label>
          <input
            class="inputfile"
            type="file"
            id="Commercepicturebox"
            name="commerce"
            accept="image/png, image/jpg"
          />
        </div>

        <div class="file">
          <label for="Logopicturebox">Choisi la photo du logo:</label>
          <input
            class="inputfile"
            type="file"
            id="Logopicturebox"
            name="logo"
            accept="image/png, image/jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Media;
