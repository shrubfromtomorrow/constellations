const canvas = document.querySelector("#main");

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


function Light(id, x, y, radius, color) {
  this.id = id;
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
}


let lightArray = [];


let interval;


let j = 0;

function animate() {
  if (j > 0) {
    clearInterval(interval)

    rand1 = Math.floor(Math.random() * 249);
    rand2 = Math.floor(Math.random() * 249);


    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.lineWidth = 3;
    ctx.moveTo(lightArray[rand1].x, lightArray[rand1].y);
    ctx.lineTo(lightArray[rand2].x, lightArray[rand2].y);
    ctx.stroke();
  }

  else {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (let i = 0; i<250; i++){
      ctx.beginPath();
      ctx.fillStyle = "pink";
      randX = Math.floor(6 + (Math.random() * (window.innerWidth - 12)));
      randY = Math.floor(6 + (Math.random() * (window.innerHeight - 12)));
      radius = 3;
      ctx.arc(randX, randY, radius, 0, Math.PI*2);
      ctx.fill();
      lightArray.push(new Light(i, randX, randY, radius, ctx.fillStyle));
    }
    j++;
  }
}

function clear() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
}

function main() {
  interval = setInterval(animate, 100);
}


window.addEventListener('load', (event) => {
  main();
});
