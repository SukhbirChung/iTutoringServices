const form = document.querySelector('form');
const message = document.querySelector('.message');

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const inputs = form.querySelectorAll('input');    
    const dataToBeSent = {
        name: inputs[0].value,
        course: inputs[1].value,
        email: inputs[2].value,
        message: form.querySelector('textarea').value
    }
    axios.post(`http://localhost:3000/`, dataToBeSent)
        .then(response => {
            message.style.display = "block";
            message.style.border = "2px solid rgba(0, 132, 87, 1)";
            message.style.backgroundColor = "rgba(0, 132, 87, 0.6)";
            message.textContent = "Message Sent. Thank you for getting in touch with us. We will get back to you as soon as possible.";
        })
        .catch(error => {
            message.style.display = "block";
            message.style.border = "2px solid rgba(156, 24, 61, 1)";
            message.style.backgroundColor = "rgba(156, 24, 61, 0.6)";
            message.textContent = "Sorry, we could not send your message.";
        })
        .then(() => {
            inputs[0].value = "";
            inputs[1].value = "";
            inputs[2].value = "";
            form.querySelector('textarea').value = "";
        });
});