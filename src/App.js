import React, { useState } from "react";
// Importing Components
import Player from "./components/Player";
import Song from "./components/Song";
// Importing Styles scss
import "./styles/app.scss";
//Importing data
import chillHop from "./data";
// Importing Util
import util from "./util";

function App() {
  // State
  const [songs, setSongs] = useState(chillHop());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  return (
    <div>
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} />
    </div>
  );
}

export default App;
