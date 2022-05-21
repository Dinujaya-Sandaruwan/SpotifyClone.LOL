let greting = document.getElementById('greting');

let time = new Date();
let hours = time.getHours();

if (hours < 12) {
    greting.innerText = 'Good Morning';
}
if (hours >= 12 && hours <= 18) {
    greting.innerText = 'Good Afternoon';
}
if (hours >= 18 && hours <= 24) {
    greting.innerText = 'Good Everning';
}