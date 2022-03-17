const canvas = document.getElementById('js_canvas');
const ctx = canvas.getContext('2d');
const color = document.querySelectorAll('.color_js');
const brosh = document.getElementById('brosh_value');
const mode = document.querySelector('.mode');
const lastic = document.querySelector('.lastic');
canvas.width = 700;
canvas.height = 700;
let ris = false;

ctx.lineWidth = 2.5;
ctx.strokeStyle = 'black';
ctx.fillStyle = "#fffdc9";
function notris () {
    ris = false
}

let zalivka = false;

function onMouseMove (event) {
    x = event.offsetX;
    y = event.offsetY;
    if (!ris) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
        
    }
};

function onMouseMDown(event) {
    ris = true;
}

function colorStyle(event) {
    const colors = event.target.style.backgroundColor;
    ctx.strokeStyle = colors;
    ctx.fillStyle = colors;
}


if (canvas) {
    canvas.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('mouseleave', notris)
    canvas.addEventListener('mousedown', onMouseMDown)
    canvas.addEventListener('mouseup', notris)
    canvas.addEventListener('click', fills)
};

color.forEach(color =>color.addEventListener('click', colorStyle))

function inputValue(event){
    const brosh_value = event.target.value;
    ctx.lineWidth = brosh_value;
}

if(brosh) {
    brosh.addEventListener('input', inputValue)
}

function moderis() {
    if(zalivka === true){
        zalivka = false;
        mode.innerText = 'Заливка'
    }else{
        zalivka = true;
        mode.innerText = 'Рисование';
    }
}

function fills() {
    if (zalivka) {
        ctx.fillRect(0, 0, 700, 700);
    }
}

function stirat() {
    ctx.strokeStyle = '#fffdc9';
}

mode.addEventListener('click', moderis)
lastic.addEventListener('click', stirat)
