// Loader
window.onload = () => {
  document.getElementById("loader").style.display = "none";
};

// Typing effect
const text = "Tech Enthusiast | Web Developer | Python & Electronics";
let i = 0;
function type(){
  if(i < text.length){
    document.getElementById("typing").innerHTML += text[i++];
    setTimeout(type, 80);
  }
}
type();

// Scroll animation
const faders = document.querySelectorAll(".fade");
window.addEventListener("scroll", () => {
  faders.forEach(el => {
    if(el.getBoundingClientRect().top < window.innerHeight - 100){
      el.classList.add("show");
    }
  });
});

// Particle background
const c = document.getElementById("particles");
const ctx = c.getContext("2d");
c.width = innerWidth;
c.height = innerHeight;

let p = Array.from({length:80}, () => ({
  x:Math.random()*c.width,
  y:Math.random()*c.height,
  vx:(Math.random()-.5),
  vy:(Math.random()-.5)
}));

function draw(){
  ctx.clearRect(0,0,c.width,c.height);
  p.forEach(o=>{
    ctx.fillStyle="#38bdf8";
    ctx.fillRect(o.x,o.y,2,2);
    o.x+=o.vx;
    o.y+=o.vy;
    if(o.x<0||o.x>c.width) o.vx*=-1;
    if(o.y<0||o.y>c.height) o.vy*=-1;
  });
  requestAnimationFrame(draw);
}
draw();