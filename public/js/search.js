/* eslint-disable no-undef */
const searchDb = async (event) => {
  event.preventDefault();

  const search = $("#search-term").val().trim();
  const fullSearch = search.split(" ").join("+");

  if (fullSearch) {
    await fetch("https://openlibrary.org/search.json?q=" + fullSearch)
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        console.log(responseData);
        return responseData;
      })
      .then((data) => {
        this.setState({ questions: data });
      })
      .catch((err) => {
        console.log("fetch error" + err);
      });
  }

  // console.log(response.json());

  // if (response.ok) {
  //   // document.location.replace("/search");
  // } else {
  //   alert(response.statusText);
  // }
};

$(".search-form").on("submit", searchDb);
