/* eslint-disable no-undef */
const searchDb = async (event) => {
  event.preventDefault();

  const search = $("#searchTerm").val().trim();
  const fullSearch = search.split(" ").join("+");
  let finalResults = {};

  if (fullSearch) {
    await fetch("https://openlibrary.org/search.json?q=" + fullSearch)
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        finalResults = responseData.docs;
        console.log(finalResults);
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
  }
};

$(".search-form").on("submit", searchDb);
