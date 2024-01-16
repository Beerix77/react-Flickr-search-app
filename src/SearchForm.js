import { useState } from "react";


function SearchForm(props) {

  const [searchText, setSearchText] = useState('');


  // Display search results -> <FlickrApp /> -> <SearchResults />
  function handleSubmit(ev) {           // click <Enter> or button (submit)
    ev.preventDefault();
    console.log('Search:', searchText);
    props.onSearchSubmit(searchText);
  } // end handleSubmit


  function handleInput(ev) {
    setSearchText(ev.target.value);
  } // end handleInput


  return (
    <form onSubmit={handleSubmit}> 
      <input type="text" onChange={handleInput}></input>
      <button>Search</button>
    </form>
  );

} // end SearchForm


export default SearchForm;