const bookComment = async (e) => {
  e.preventDefault();

  // add query selector
  const id = document.querySelector().value.trim();
  const body = document.querySelector(".comment-input").value.trim();

  if (body) {
    const response = await fetch(`/api/books/${id}/comment`, {
      method: "POST",
      body: JSON.stringify({ body }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.reload();
    }
  }
};

let addComment = document.querySelector("#confirm-comment");
if (addComment) {
  addComment.addEventListener("click", addComment);
}
