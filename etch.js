const div = document.createElement('div');
const container = document.querySelector('.container')
div.classList.add('box');
const button = document.querySelector('button');


for (let i = 0; i < 256; i++){
    container.appendChild(div.cloneNode(true));
}

const boxes = document.querySelectorAll('.box');
for (let i=0; i < boxes.length; i++){
    boxes[i].addEventListener('mouseover', () => {
            boxes[i].classList.add('filler');
        });
}

button.addEventListener('click', ()=> {
    for (let i = 0; i < boxes.length; i++){
        boxes[i].classList.remove('filler');
    }
});