//
// This snippet does the typing effect for mass accuracy
//
Reveal.addEventListener('massAccuracy', function() {
  var options = {
    strings: ["^1000Mass Acceracy", "Mass Acc^500uracy"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: false,
    showCursor: false,
  };
  
  var typed = new Typed(".accuracy", options);
});

//
// This snippet does the isotope animation
// 
var canvas = document.getElementById('isotope-canvas');
var ctx = canvas.getContext('2d');
var raf;

var carbonLabel = ctx.fillText("Carbon - 12.011", 400, 0);

var isotopes = [];
for(var i=0; i<100; i++) {
  var ball = {
    x: Math.floor(50 + Math.random() * 300),
    y: Math.floor(50 + Math.random() * 200),
    vx: -3 + Math.random() * 6,
    vy: -3 + Math.random() * 6,
    radius: 5,
    color: 'white',
    type: 'C12',
    upperY: 600,
    lowerY:0,
    upperX: 800,
    lowerX: 0,
    draw: function() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  };

  isotopes.push(ball);
}

var ball = {
  x: Math.floor(50 + Math.random() * 300),
  y: Math.floor(50 + Math.random() * 200),
  //vx: -3 + Math.random() * 3,
  //vy: -3 + Math.random() * 3,
  vx: 3,
  vy: 3,
  radius: 5,
  color: 'skyblue',
  type: 'C13',
  upperY: 600,
  lowerY:0,
  upperX: 800,
  lowerX: 0,
  draw: function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};

isotopes.push(ball);

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for(var i=0; i<isotopes.length; i++) {
    var ball = isotopes[i];
    ball.draw();
    ball.x += ball.vx;
    ball.y += ball.vy;
    if (ball.y + ball.radius/2 + ball.vy > ball.upperY || ball.y - ball.radius/2 + ball.vy < ball.lowerY) {
      ball.vy = -ball.vy;
    }
    if (ball.x + ball.radius/2 + ball.vx > ball.upperX) {
      ball.vx = -Math.abs(ball.vx);
    }
    if (ball.x - ball.radius/2 + ball.vx < ball.lowerX) {
      ball.vx = Math.abs(ball.vx);
    }
  }
  raf = window.requestAnimationFrame(draw);
}

raf = window.requestAnimationFrame(draw);

var sliderCheckbox = document.getElementById("isotope-checkbox");
sliderCheckbox.addEventListener('change', function() {
  if(this.checked) {
    for(var i=0; i<isotopes.length; i++) {
      var ball = isotopes[i];
      if(ball.type === 'C12') {
        ball.upperX = 400;
      }
      else {
        ball.lowerX = 400;
      }
    }
  }
  else {
    for(var i=0; i<isotopes.length; i++) {
      var ball = isotopes[i];
      ball.lowerX = 0;
      ball.upperX = 800;
    }
  }
});



// 
// Equations are here
// 
// TOF equations
katex.render("E_p = qU", document.getElementById("tof_potential"));
katex.render("E_k = \\frac{1}{2}mv^2", document.getElementById("tof_kinetic"));
katex.render("v = \\frac{d}{t}", document.getElementById("tof_velocity"));
katex.render("qU = \\frac{1}{2}m(\\frac{d}{t})^2", document.getElementById("tof_combined"));
katex.render("t = \\frac{d}{\\sqrt{2U}}\\sqrt{\\frac{m}{q}}",document.getElementById("tof_final"));

//Orbitrap equations
katex.render("U(r,z) = \\frac{k}{2}(z^2-\\frac{r^2}{2}) + \\frac{k}{2}(R_m)^2\\ln{\\frac{r}{R_m}}+C", document.getElementById("orbitrap_potential"));
katex.render("\\ddot{r} - r\\dot{\\varphi}^2 = -\\frac{q}{m}\\frac{k}{2}[\\frac{(R_m)^2}{r}-r]", document.getElementById("orbitrap_motion1"));
katex.render("\\frac{d}{dt}(r^2\\dot{\\varphi}) = 0", document.getElementById("orbitrap_motion2"));
katex.render("\\ddot{z}=-\\frac{q}{m}kz", document.getElementById("orbitrap_motion3a"));
katex.render("\\ddot{z}=-\\frac{q}{m}kz", document.getElementById("orbitrap_motion3b"));
katex.render("z(t) = z_0\\cos({\\omega}t) + \\sqrt{\\frac{2E_z}{k}}\\sin({\\omega}t)", document.getElementById("orbitrap_frequency"));
katex.render("\\omega = \\sqrt{\\frac{q}{m}k}", document.getElementById("orbitrap_omega"));



