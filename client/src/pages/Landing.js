import React from "react";
import SearchBar from "../components/SearchBar";
import SavedPlaylists from "./SavedPlaylists";
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className="container">
        
        <SearchBar />

        <Link to='/savedplaylists'> Saved Playlists</Link>

        </div>
    )
}

export default Landing