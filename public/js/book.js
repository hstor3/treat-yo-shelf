// const { response } = require("express");

// const bookComment = async (e) => {
//     e.preventDefault();

//     // add query selector 
//     const id = document.querySelector().value.trim();
//     const body = document.querySelector('.comment-input').value.trim();

//     if (body) {
//         const response = await fetch(`/api/books/${id}/comment`, {
//             method: 'POST',
//             body: JSON.stringify({ body }),
//             headers: { 'Content-Type': 'application/json' },
//         });
//         if (response.ok) {
//             document.location.reload()
//         }
//     }
// };

const deleteBook = async (e) => {
    console.log('delete this book!!')
    const id = e.target.getAttribute('data-id');
    console.log(id)
    const response = await fetch(`/api/books/${id}`, {
        method: 'DELETE'
    });
    console.log(response)
    if (response.ok) {
        document.location.replace('/lists')
    } else {
        console.log('FAIL')
    }
}

// let addComment = document.querySelector('#confirm-comment');
// if (addComment) {
//     addComment.addEventListener('click', addComment)
// };

let bookDelete = document.getElementsByClassName('bookDeleter')
console.log(bookDelete)
if (bookDelete) {
    for (let i = 0; i < bookDelete.length; i++) {
        bookDelete[i].addEventListener('click', deleteBook)
    }
}