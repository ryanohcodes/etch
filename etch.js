const div = document.createElement('div');
const container = document.querySelector('.container')
div.classList.add('box');
const button = document.querySelector('button');

let grid = 256;

for (let i = 0; i < grid; i++){
    container.appendChild(div.cloneNode(true));
}

let boxes = document.querySelectorAll('.box');
for (let i=0; i < boxes.length; i++){
    boxes[i].addEventListener('mouseover', () => {
            boxes[i].classList.add('filler');
        });
}

colorIn();

function colorIn(){
    for (let i=0; i < boxes.length; i++){
    boxes[i].addEventListener('mouseover', () => {
            boxes[i].classList.add('filler');
        });
    }
}


button.addEventListener('click', ()=> {
    for (let i = 0; i < boxes.length; i++){
        boxes[i].classList.remove('filler');
    }

    for (let i = 0; i < boxes.length; i++){
        container.removeChild(boxes[i]);
    }

    grid = prompt('Enter desired grid size num x num that is less than 100');

    while (grid > 100){
        grid = prompt('Enter desired grid size num x num that is less than 100');
    }

    grid = parseInt(grid);
    let sizeFactor = 22;
    let newGrid = grid * grid;

    let newBox = grid * sizeFactor;

    document.getElementById('container').style.width = `${newBox}px`;
    document.getElementById('container').style.heigth = `${newBox}px`;

    for (let i = 0; i < newGrid; i++){
        container.appendChild(div.cloneNode(true));
    }
    boxes = document.querySelectorAll('.box');
    colorIn();
    
});