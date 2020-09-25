import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Gallery } from './Gallery'

const playlistLink = "https://open.spotify.com/playlist/2cwtPGGFtHBWjXOuLGD5NR?si=FbFzAUWiTnKogFFfykZrhQ";

function App() {
  return (
    <div className="App">
      <Gallery pList={playlistLink}/>
    </div>
  );
}

export default App;
