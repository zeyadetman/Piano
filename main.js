window.addEventListener("keydown", action);

function action(event) {
    document.querySelector(`audio[data-key="${event.keyCode}"]`).play();
    var x = document.querySelector(`.keys[data-key="${event.keyCode}"]`);
    x.classList.add('playing');

}

function removetransition(e) {
    this.classList.remove('playing');

}

keys = document.querySelectorAll('.keys');
keys.forEach(keys => keys.addEventListener('transitionend', removetransition));