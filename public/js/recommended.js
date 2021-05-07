function getApi(genre) {
  let urlRequest = "https://openlibrary.org/search.json?q=" + genre;

  fetch(urlRequest)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let genre = $("<div>").text(data.docs[0].title);

      $(".suggested").append(genre);
    });
}
