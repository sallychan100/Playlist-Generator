import React, { useState } from 'react';
import { QUERY_SEARCHPLAYLISTS } from '../../utils/queries';
import { useLazyQuery } from '@apollo/client';
import './SearchBar.css';

export default function SearchBar() {
  const [inputState, setInputState] = useState();
  const [getPlaylist, { loading, error, data }] = useLazyQuery(QUERY_SEARCHPLAYLISTS);

  function handleSearchClick(event) {
    event.preventDefault();

    getPlaylist({ variables: { searchTerm: inputState } });
    // We do fetching here
  }

  const handleChange = event => {
    const { value } = event.target;
    setInputState(value);
  };

  return (
    <form className="container">
      <label htmlFor="search" className="form-label mb-4">
        Enter a genre, artist or activity:
      </label>
      <input placeholder="What do you want to listen to?" onChange={handleChange} className="form-input mb-4" />

      <button onClick={handleSearchClick} className="btn btn-outline-light d-block mb-4 w-100">
        {' '}
        Search{' '}
      </button>
    </form>
  );
}
