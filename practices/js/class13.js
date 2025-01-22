const myBtn = document.getElementById('my-Btn');
const smallBox = document.getElementById('small-box');

myBtn.addEventListener('click', function () {
    myBtn.textContent = 'Click Me!';
    myBtn.style.backgroundColor = 'blue';

})

myBtn.addEventListener('click', function () {
    const hiddenBox = document.getElementById('small-box')

    hiddenBox.style.display = 'block'
})