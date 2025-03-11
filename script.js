// JavaScript code for interactive elements
// JavaScript code for interactive elements

document.querySelector('.project-card:nth-child(4)').addEventListener('click', function() {
    const message = document.createElement('div');
    message.textContent = 'Inform 7 code written with generative assists from Gemeni and ChatGpt 4.0';
    message.style.position = 'fixed';
    message.style.top = '50%';
    message.style.left = '50%';
    message.style.transform = 'translate(-50%, -50%)';
    message.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    message.style.color = 'white';
    message.style.padding = '20px';
    message.style.borderRadius = '10px';
    message.style.zIndex = '1000';
    document.body.appendChild(message);
});
