var button;
var box;
window.addEventListener('load', function () {
        console.log('ok');
    let boxClass = document.getElementsByClassName('box');
    box = boxClass[0];
    button = document.getElementById('button');
    
    button.addEventListener('click', function () {
        console.log('click');
        box.classList.toggle('box-rotate');

    });
});

