document.addEventListener('DOMContentLoaded', function () {


    let toggle = document.querySelector('.navigate');
    let menu = document.querySelector('.menu');

    let slide = document.querySelectorAll('.slide-content');
    let leftArrow = document.querySelector('.left-arrow');
    let rightArrow = document.querySelector('.right-arrow');
    let current = 0;


    // Start of side Bar

    toggle.addEventListener('click', () => {
        if (toggle.firstElementChild.classList.contains('fa-bars')) {
            toggle.innerHTML = '<img src="icons/close.png" alt="close" class="fa-close">';
        }
        else {
            toggle.innerHTML = '<img src="icons/menu.png" alt="bars" class="fa-bars">';
        }

        menu.classList.toggle('show_menu');
    });

    // End of side Bar 


    // Bottom start

    const bottom = document.querySelector('.bottom');

    for (let i = 0; i < slide.length; i++) {
        const div = document.createElement('div');
        div.className = 'button';
        bottom.appendChild(div);
    }

    const buttons = document.querySelectorAll('.button');
    buttons[0].style.backgroundColor = 'black';

    const restBg = () => {
        buttons.forEach((button) => {
            button.style.backgroundColor = '#fff';
        });
    }

    const updateButtonColor = () => {
        restBg();
        buttons[current].style.backgroundColor = 'black';
    }

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            current = index;
            restBg();
            slide[current].style.display = 'block';
            updateButtonColor();
            button.style.backgroundColor = 'black';
        });
    });

    // Bottom End.


    // rest the images function
    function reset() {
        slide.forEach(move => {
            move.style.display = 'none';
        });
    }

    // start slide function
    function startSlide() {
        reset();
        if (slide.length > 0) {
            slide[0].style.display = 'block';
        }
    }

    // slide left function
    function slideLeft() {
        current--;
        if (current < 0) {
            current = slide.length - 1;
        }
        reset();
        slide[current].style.display = 'block';
        updateButtonColor();
    }

    // left arrow Event Listener.

    leftArrow.addEventListener('click', slideLeft);

    // slide right function 
    function slideRight() {
        current++;
        if (current >= slide.length) {
            current = 0;
        }
        reset();
        slide[current].style.display = 'block';
        updateButtonColor();
    }

    // right Arrow Event listener

    rightArrow.addEventListener('click', slideRight);

    startSlide();





});


window.addEventListener('scroll', reveal);

function reveal() {
    let reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 150;

        if (revealtop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}