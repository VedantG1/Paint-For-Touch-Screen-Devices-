var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

width = screen.width;

newWidth = screen.width - 70;

height = screen.height;

newHeight = screen.height - 70;

canvas.addEventListener("touchstart", myScreenTouch);

if(width < 992){
    canvas.width = newWidth;
    canvas.height = newHeight;
    canvas.style.overflow = "hidden";
}

function myScreenTouch(e){
    lastX = e.touches[0].clientX - canvas.offsetLeft
    lastY = e.touches[0].clientY - canvas.offsetTop
}

canvas.addEventListener("touchmove", myScreenMove);

function myScreenMove(e){
    currentX = e.touches[0].clientX - canvas.offsetLeft
    currentY = e.touches[0].clientY - canvas.offsetTop

    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width").value;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    ctx.moveTo(lastX, lastY);
    ctx.lineTo(currentX, currentY);

    ctx.stroke();
    lastX = currentX;
    lastY = currentY;
}

function clear1(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
}