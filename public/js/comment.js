const createComment = async (e) => {
    e.preventDefault();

    // add a query selector
    const postId = document.querySelector('').value.trim();
    conse commentBody = document.querySelector('').value.trim();

    if (commentBody) {
        const response = await fetch(`/api/posts/${id}/comment`, {
            method: 'POST',
            body: JSON.stringify({ body }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.reload()
        }
    }
};

let commentButton = document.querySelector('');
if (commentBody) {
    commentButton.addEventListener('click', createComment)
}