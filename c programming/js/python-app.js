const toggleBtn = document.getElementsByClassName('toggle-btn')[0];
const navbarLinks = document.getElementsByClassName('nav-links')[0];
const navIcon = document.getElementsByClassName('nav-icon')[0];
const contentToggle = document.getElementsByClassName('content-toggle')[0];
const indexContent = document.getElementsByClassName('index-div')[0];
const contentIcon = document.getElementsByClassName('content-icon')[0];

toggleBtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active-toggle');
})

navIcon.addEventListener('click', () => {
    navIcon.classList.toggle('nav-toggle');
})

contentToggle.addEventListener('click', () => {
    indexContent.classList.toggle('index-active');
})

contentIcon.addEventListener('click', () => {
    contentIcon.classList.toggle('content-rotate')
})


