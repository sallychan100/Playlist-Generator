import React from "react";
import SearchBar from "../components/SearchBar";
import DisplayResult from "./DisplayResult";
import { Link } from 'react-router-dom';


const Landing = () => {
    return (
        <div className="container">
        
        <SearchBar />

        <DisplayResult />

        <Link to='/savedplaylists'> Saved Playlists</Link>

        </div>
    )
}

export default Landing