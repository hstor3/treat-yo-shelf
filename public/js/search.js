/* eslint-disable no-undef */
const searchDb = async (event) => {
  event.preventDefault();

  const search = $("#searchTerm").val().trim();
  const fullSearch = search.split(" ").join("+");
  let finalResults = {};

  if (fullSearch) {
    // only search for title
    await fetch("https://openlibrary.org/search.json?title=" + fullSearch)
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        finalResults = responseData.docs;
        console.log(finalResults);
        // for loop to only fetch 10 books?
        // append to a premade html 
        finalResults.map((result) => {
          $("#searchResultsSection").append(`
  <img class="search-img" src="http://covers.openlibrary.org/b/id/${result.cover_i}-L.jpg" alt="Book IMG" />
  <h1 class="search-title">
    Title:
    ${result.title}
  </h1>
  <h3 class="search-author">
    Author:
    ${result.author_name}
  </h3>`);
        });
      })
      .catch((err) => {
        console.log("fetch error" + err);
      });
// 
  }
};

$(".search-form").on("submit", searchDb);


  // function to append/get the search results to the lists
  
function searchHistory() {
    // debugger
    searches = JSON.parse(localStorage.getItem('searches'));
    for (let i = 0; i < searches.length; i++) {
      let recent = $('<li class=finalResults>').text(searches[i]);
      $('.search-result').append(recent);
      // document.getElementById('search-result').innerHTML = localStorage.getItem('searches');
  }
  };
  
  searchHistory();