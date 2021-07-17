var canvasElement = document.getElementById('canvas');

function game(){
    ctx = canvasElement.getContext('2d');
    ctx.canvas.width = window.innerWidth / 2;
    ctx.canvas.height = window.innerHeight /2;
}


game();