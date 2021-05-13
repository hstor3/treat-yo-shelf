/* eslint-disable no-undef */
const searchDb = async (event) => {
  event.preventDefault();

  const search = $("#searchTerm").val().trim();
  const fullSearch = search.split(" ").join("+");
  let finalResults = [];

  if (fullSearch) {
    // only search for title
    await fetch("https://openlibrary.org/search.json?title=" + fullSearch)
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        finalResults = responseData.docs;
        // for loop to only fetch 10 books?
        // append to a premade html
        finalResults.map((result, index) => {
          if (index < 10) {
            $("#searchResultsSection").append(`
              <form action="/api/books" method="POST">
                <div class="search-display-card">
                <h1 class="search-title">
                    <label for=""></label>
                    <input name="title" type="hidden" value="${result.title}">
                    <div>${result.title}</div>
                </h1>
                <h3 class="search-author">
                  <label for="">
                      
                  </label>
                  <input type="hidden" name="author" value="${result.author_name}">
                  <div>${result.author_name}</div>
                </h3><br>
                <img class="search-img" src="http://covers.openlibrary.org/b/id/${result.cover_i}-L.jpg" alt="Book IMG" />
                <button type="submit" class="list-add" id="list-books">Add to my List</button><br>
              </div>
              </form>
        <div>
        <br><br><br><br><br>
        </div>`);
          }
        });
      });

    function appendResults() {
      for (let i = 0; i < finalResults.length; i++) {
        let result = finalResults[i];
        $(".appended-results").append(result);
      }
    }

    function searchHistory() {
      const searches = JSON.parse(localStorage.getItem("searches"));
      for (let i = 0; i < searches.length; i++) {
        let recent = $("<li class=finalResults>").text(searches[i]);
        $(".search-result").append(recent);
      }
    }
    searchHistory();
    appendResults();
  }
};

$(".search-form").on("submit", searchDb);

// function to append/get the search results to the lists

const appendBook = async (e) => {
  e.preventDefault();

  const id = document.getElementById("book_id").value.trim();
  const body = document.getElementById("searchResultsSection");

  if (body) {
    const response = await fetch(`/api/books/${id}`, {
      method: "POST",
      body: JSON.stringify({ body }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.reload("/");
    }
  }
};

let bookSender = document.getElementById("list-books");
if (bookSender) {
  bookSender.addEventListener("click", appendBook);
}
