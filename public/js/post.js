const addPost = async (e) => {
    e.preventDefault();

    // add query selectors
    const postTitle = document.querySelector('').value.trim();
    const postBody = document.querySelector('').value.trim();

    if (postTitle && postBody) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ postTitle, postBody }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/')
        }
    }
};

const deletePost = async (e) => {
    const postId = e.target.getAttribute('id');
    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        doccument.location.replace('/')
    }
}

// add post id or class here
let getPost = document.querySelector();
if (getPost) {
    getPost.addEventListener('click', addPost)
};

// add post id or class here
let removePost = document.querySelector();
if (removePost) {
    removePost.addEventListener('click', deletePost)
};