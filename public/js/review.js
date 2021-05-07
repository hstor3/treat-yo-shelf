const newReview = async (e) => {
    e.preventDefault();
    console.log('does this work?')

    const id = e.target.getAttribute('data-id');
    const body = document.querySelector('.review-input').value.trim();

    if (body) {
        const response = await fetch(`/api/books/${id}/reviews`, {
            method: 'POST',
            body: JSON.stringify({ body }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            console.log('comments work!!')
            document.location.reload()
        }
    }
};

// let confirmReview = document.getElementById('confirm-review');
// if (confirmReview) {
//     // for (let i = 0; i < confirmReview.length; i++) {
//         confirmReview.addEventListener('click', newReview)
//         console.log('review button works!!')
//     // }
// };