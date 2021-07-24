import React from "react";
// Importing Components
import LibrarySong from "./LibrarySong";

function Library({ songs, setCurrentSong }) {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            setCurrentSong={setCurrentSong}
            song={song}
            id={song.id}
            key={song.id}
            // audioRef={audioRef}
            // isplaying={isPlaying}
            // setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
}

export default Library;
