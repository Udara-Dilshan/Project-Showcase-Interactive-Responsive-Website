document.getElementById('colorButton').addEventListener('click', function() {
    document.body.style.backgroundColor = 'lightblue';
});

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => {
        document.getElementById('apiData').innerHTML = `
            <h2>${data.title}</h2>
            <p>${data.body}</p>
        `;
    });
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    if (name === '' || email === '') {
        document.getElementById('errorMessage').textContent = 'Please fill out all fields.';
    } else {
        document.getElementById('errorMessage').textContent = '';
        alert('Form submitted successfully!');
    }
});