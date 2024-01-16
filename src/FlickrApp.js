import SearchForm from './SearchForm';
import SearchResults from './SearchResults';


function FlickrApp() {

  function performSearch(querytext) {
  //function for callback ie for child Component <SearchForm /> to be able to pass back info
  console.log( 'performSearch() data:', querytext);
  }


  return (
    <div>
      <h1>Flickr Searchr</h1>
      <hr/>

      <SearchForm onSearchSubmit={performSearch} />
      
    </div>
  );

} // end FlickrApp


export default FlickrApp;