var btn = document.querySelector("button")
var resume = document.querySelector(".resume");
var linkedIn = document.querySelector(".linkedIn");
var gitHub = document.querySelector(".gitHub");
// var email = document.querySelectot(".email")

resume.addEventListener('click', (e => {
    window.location = "Assets/Images/resume.png"
}));

linkedIn.addEventListener('click', (e => {
    window.location = "https://linkedin.com/in/avpizarro"
}));

gitHub.addEventListener('click', (e => {
    window.location = "https://github.com/avpizarro"
}));

// email.addEventListener('click', (e => {
// }));
