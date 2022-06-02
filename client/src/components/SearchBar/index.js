import React, { useState } from "react";
import { QUERY_SEARCHPLAYLISTS } from "../../utils/queries";
import { useLazyQuery } from "@apollo/client";
import "./SearchBar.css";

export default function SearchBar() {
  const [inputState, setInputState] = useState();
  const [getPlaylist, { loading, error, data }] = useLazyQuery(
    QUERY_SEARCHPLAYLISTS
  );

  const [songs, setSongs] = useState([]);

  function handleSearchClick(event) {
    event.preventDefault();

    getPlaylist({ variables: { searchTerm: inputState } });
    // We do fetching here
  }

  console.log(data);

  const handleChange = (event) => {
    const { value } = event.target;
    setInputState(value);
  };

  function handleSongChange(song) {
    const inArray = songs.findIndex((track) => track === song.id);
    console.log();
    if (inArray > -1) {
      songs.splice(inArray, 1);
      console.log(song.id + " was removed from playlist");
      console.log(songs);
    } else {
      // setSongs([...songs, song]);
      songs.push(song.id);
      console.log(song.name + " was added to playlist");
      console.log(songs);
    }
  }

  function savePlaylist() {
    // use graphql mutation to create playlist
    //songs;
  }

  return (
    <div>
      <form>
        <label htmlFor="search" className="form-label mb-4">
          Enter a genre, artist or activity:
        </label>
        <input
          placeholder="What do you want to listen to?"
          onChange={handleChange}
          className="form-input mb-4"
        />
      </form>

      <button
        onClick={handleSearchClick}
        className="btn d-block mb-4 w-100"
      >
        {" "}
        Search{" "}
      </button>

      {data?.search ? (
        <div>
          <button className="saveButton" onClick={() => savePlaylist()}>
            Save to Playlist
          </button>
          {data.search.map((el, index) => {
            return (
              <div key={index}>
                <div className="checkrow">
                  <input
                    className="select-box"
                    type="checkbox"
                    onChange={() => handleSongChange(el)}
                  />
                  <div>
                    {" "}
                    <h2>{el.name}</h2>
                    <h2>{el.artist.join(", ")}</h2>
                  </div>
                </div>
                <img src={el.image} style={{ height: "180px" }} />
                {el.preview_url && (
                  <audio
                    controls="controls"
                    src={el.preview_url}
                    autostart="0"
                  ></audio>
                )}
                <div className="bar">
                  <p style={{ position: "absolute", fontSize: "18px" }}>
                    Popularity
                  </p>
                  <div
                    className="bar-inner"
                    style={{ width: el.popularity + "%" }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
