/*Login and Sign up button jss implementation*/
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');

loginBtn.addEventListener('click', function () {
    alert('Login button clicked!');
});

signupBtn.addEventListener('click', function () {
    alert('Sign Up button clicked!');
});


//For the Hero Title
const heroTitle = document.getElementById('hero-title');

heroTitle.addEventListener('click', function () {
    heroTitle.style.color = 'red'
    heroTitle.style.textShadow = '2px 2px 5px rgba(0,0,0,0.3)';

})

// ক্লিক করলে হিডেন বক্স শো করবে
const tryItFreeBtn = document.getElementById('try-it-free');
const hiddenBox = document.getElementById('hidden-box');

tryItFreeBtn.addEventListener('click', function (event) {
    event.preventDefault();
    hiddenBox.style.display = 'block';
});