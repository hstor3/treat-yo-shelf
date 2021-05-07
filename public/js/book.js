const deleteBook = async (e) => {
  console.log("delete this book!!");
  const id = e.target.getAttribute("data-id");
  console.log(id);
  const response = await fetch(`/api/books/${id}`, {
    method: "DELETE",
  });
  // console.log(response)
  if (response.ok) {
    document.location.replace("/lists");
  } else {
    console.log("FAIL");
  }
};

let bookDelete = document.getElementsByClassName("bookDeleter");
  (bookDelete);
if (bookDelete) {
  for (let i = 0; i < bookDelete.length; i++) {
    bookDelete[i].addEventListener("click", deleteBook);
  }
}
