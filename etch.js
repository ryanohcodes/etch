const div = document.createElement('div');
const container = document.querySelector('.container')
div.classList.add('box');

for (let i = 0; i < 256; i++){
    container.appendChild(div.cloneNode(true));
}

const boxes = document.querySelectorAll('.box');
for (let i=0; i < boxes.length; i++){
    boxes[i].addEventListener('mouseover', () => {
            div.classList.add('filler');
        });
}
