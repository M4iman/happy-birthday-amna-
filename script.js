const button = document.getElementById('effectBtn');
const effectText = document.getElementById('effect');
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confettiArray = [];

class Confetti {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height - canvas.height;
    this.size = Math.random() * 10 + 5;
    this.speed = Math.random() * 3 + 2;
    this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
  }
  update() {
    this.y += this.speed;
    if(this.y > canvas.height) this.y = 0 - this.size;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}

function createConfetti() {
  for(let i=0; i<150; i++){
    confettiArray.push(new Confetti());
  }
}

function animateConfetti() {
  ctx.clearRect(0,0,canvas.width, canvas.height);
  confettiArray.forEach(confetti => {
    confetti.update();
    confetti.draw();
  });
  requestAnimationFrame(animateConfetti);
}

button.addEventListener('click', () => {
  effectText.textContent = "🎉 Awak memang istimewa bagi saya! Terima kasih sebab selalu ada untuk saya 💖 🎉";
  createConfetti();
  animateConfetti();
});
