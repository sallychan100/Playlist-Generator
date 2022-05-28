import React,{ useState }  from 'react'

export default function SearchBar() {

const[inputState, setInputState] = useState()
function handleSearchClick(event){
    event.preventDefault()
    console.log(inputState)
}

const handleChange = (event) => {
    const {value} = event.target;
    setInputState(value)
}

  return (
    <form>
        <label htmlFor="search"  >Type a keyboard:</label>
        <input placeholder= "What do you want to listen to?" onChange={handleChange}/> 
        <button onClick={handleSearchClick}> Search </button>
    </form>
  )
}

