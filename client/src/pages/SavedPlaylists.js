import React from "react";
// import { Link } from 'react-router-dom';

const SavedPlaylists = () => {
    return (
        
      <div className="container">
        {/* <Link to="/">
      <img src={logo} alt="Logo" className='logo'/>
      </Link> */}

            <h2>Your Playlists</h2>
        <div className="playlist">
            <h3>Playlist 1</h3>
            <p> songs displayed</p>
            </div>

            <div className="playlist">
            <h3>Playlist 2</h3>
            <p> songs displayed</p>
            </div>
          
      </div>
    );
  };
  
  export default SavedPlaylists;
  