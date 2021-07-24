import React, { useState } from "react";
// Importing Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
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
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div>
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
      <Library songs={songs} setCurrentSong={setCurrentSong} />
    </div>
  );
}

export default App;
