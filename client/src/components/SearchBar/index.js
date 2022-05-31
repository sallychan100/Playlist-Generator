import React,{ useState }  from 'react'
import './SearchBar.css'

export default function SearchBar() {

const[inputState, setInputState] = useState()
function handleSearchClick(event){
    event.preventDefault()
    // We do fetching here
}

const handleChange = (event) => {
    const {value} = event.target;
    setInputState(value)
}

  return (
   
    <form> 
        <div class="mb-3">
        <label htmlFor="search"  className='form-label'>Enter a genre, artist or activity:</label> 
        <input placeholder= "What do you want to listen to?" onChange={handleChange}  className="form-control"/> 
        </div>  
        <button onClick={handleSearchClick}> Search </button>
    </form>

  )
}

