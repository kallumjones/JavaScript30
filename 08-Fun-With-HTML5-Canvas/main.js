const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

//blends
// ctx.globalCompositeOperation = 'multiply';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(event) {
    if(!isDrawing) return; //Stops the fn when they are not mouse down
    console.log(event);

    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    //start from
    ctx.moveTo(lastX, lastY);
    //go to
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();

    [lastX, lastY] = [event.offsetX, event.offsetY];
    hue++;
    if(hue >= 360) {
        hue = 0;

    }

    if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1){
        direction = !direction; //cool way to flip a boolean
    }

    if(direction) {
        ctx.lineWidth += 0.2
    } else {
        ctx.lineWidth -= 0.2
    }
}


canvas.addEventListener('mousedown', (event) => {
    isDrawing = true;
    [lastX, lastY] = [event.offsetX, event.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);