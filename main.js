const canvas = document.querySelector("#main");

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(window.innerWidth);
console.log(window.innerWidth - 20);

let j = 0;

function animate() {
  if (j > 50) {
    clearInterval(interval)
  }

  else {
    for (let i = 0; i<20; i++){
      ctx.beginPath();
      ctx.fillStyle = "pink";
      randX = Math.floor(10 + (Math.random() * (window.innerWidth - 20)));
      randY = Math.floor(10 + (Math.random() * (window.innerHeight - 20)));
      ctx.arc(randX, randY, 10, 0, Math.PI*2);
      ctx.fill();
    }
    j++;
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  }
}

let interval = setInterval(animate, 10)
