import { useState } from "react";


function SearchForm(props) {

  const [searchText, setSearchText] = useState('');


  function handleInput(ev) {
    setSearchText(ev.target.value);
  }


  return (
    <form>
      <input type="text" onChange={handleInput}></input>
      <button>Search</button>
      <p>{searchText}</p>  
    </form>

  );

} // end SearchForm


export default SearchForm;