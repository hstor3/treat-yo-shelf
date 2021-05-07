/* eslint-disable no-undef */
const searchDb = async (event) => {
  event.preventDefault();

  const search = $("#searchTerm").val().trim();
  const fullSearch = search.split(" ").join("+");
  let finalResults = [];

  if (fullSearch) {
    // only search for title
    const response = await fetch("https://openlibrary.org/search.json?title=" + fullSearch)
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        finalResults = responseData.docs;
        console.log(finalResults);
        // for loop to only fetch 10 books?
        // append to a premade html
        finalResults.map((result, index) => {
          $("#searchResultsSection").append(`
            <form action="/api/books" method="POST">
              <img class="search-img" src="http://covers.openlibrary.org/b/id/${result.cover_i}-L.jpg" alt="Book IMG" />
              <h1 class="search-title">
                  <label for="">Title</label>
                  <input name="title" type="hidden" value="${result.title}">
                  <div>${result.title}</div>
              </h1>
              <h3 class="search-author">
                <label for="">
                    Author:
                </label>
                <input type="hidden" name="author" value="${result.author_name}">
                <div>${result.author_name}</div>
              </h3><br>
              <button type="submit" class="list-add" id="list-books">Add to my list</button><br>
            </form>`)
        });
        // finalResults.map((result, index) => {
        //   $("#searchResultsSection").append(`
        //     <img class="search-img" src="http://covers.openlibrary.org/b/id/${result.cover_i}-L.jpg" alt="Book IMG" />
        //     <h1 class="search-title">
        //       Title:
        //       ${result.title}
        //     </h1>
        //     <h3 class="search-author">
        //       Author:
        //       ${result.author_name}
        //     </h3><br>
        //     <button class="list-add" id="list-books-${index}">Add to my list</button><br>`)
        // });

        function appendResults() {
          console.log("append results btn");
          for (let i = 0; i < finalResults.length; i++) {
            let result = finalResults[i];
            $(".appended-results").append(result);
          }
        }
        
//   $('.search-btn').on('submit', appendResults);
      });
    searchHistory();

  }
};

$(".search-form").on("submit", searchDb);

// function to append/get the search results to the lists

// function searchHistory() {
//   console.log("search history function");
//   searches = JSON.parse(localStorage.getItem("searches"));
//   console.log(searches);
//   for (let i = 0; i < searches.length; i++) {
//     let recent = $("<li class=finalResults>").text(searches[i]);
//     $(".search-result").append(recent);
//     console.log(recent);
//   }
// }

const appendBook = async (e) => {
  e.preventDefault();
console.log('hi1')

  console.log('append book function')

  const id = document.getElementById('book_id').value.trim();
  const body = document.getElementById('searchResultsSection');

  if (body) {
    const response = await fetch(`/api/books/${id}`, {
      method: 'POST',
      body: JSON.stringify({ body }),
      headers: { 'Content-Type': 'application/json' },
    })
    if (response.ok) {
        console.log('if response.ok this will show')
        document.location.reload()
  }
  }
}

let bookSender = document.getElementById('list-books');
if (bookSender) {
console.log('hi')
  bookSender.addEventListener('click', appendBook)
}

searchHistory();