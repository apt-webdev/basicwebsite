let btn = document.getElementById('btn-food');
let overlay = document.getElementById('overlay');


btn.addEventListener('click', () => {
    overlay.style.display = 'grid';
    btn.style.backgroundColor = "red";

});