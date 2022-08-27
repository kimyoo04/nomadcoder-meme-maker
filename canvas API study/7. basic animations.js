https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations
//--------------------------------------------------------------------------------
// 지구의 자전과 공전을 보여주는 애니메이션 만들기
const sun = new Image();
const moon = new Image();
const earth = new Image();
function init() {
  sun.src = "canvas_sun.png";
  moon.src = "canvas_moon.png";
  earth.src = "canvas_earth.png";
  window.requestAnimationFrame(draw);
}

function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");

  // 후에 그려지는 shape이 기존에 그려진 shape 뒤에 그려진다.
  ctx.globalCompositeOperation = "destination-over"; 
  ctx.clearRect(0, 0, 300, 300); // clear canvas

  ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
  ctx.strokeStyle = "rgba(0, 153, 255, 0.4)";
  ctx.save();
  ctx.translate(150, 150);

  // Earth
  const time = new Date();
  ctx.rotate(
    ((2 * Math.PI) / 60) * time.getSeconds() +
      ((2 * Math.PI) / 60000) * time.getMilliseconds()
  );
  ctx.translate(105, 0);
  ctx.fillRect(0, -12, 40, 24); // Shadow
  ctx.drawImage(earth, -12, -12);

  // Moon
  ctx.save();
  ctx.rotate(
    ((2 * Math.PI) / 6) * time.getSeconds() +
      ((2 * Math.PI) / 6000) * time.getMilliseconds()
  );
  ctx.translate(0, 28.5);
  ctx.drawImage(moon, -3.5, -3.5);

  ctx.restore();
  ctx.restore();

  ctx.beginPath();
  ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
  ctx.stroke();

  ctx.drawImage(sun, 0, 0, 300, 300);

  window.requestAnimationFrame(draw); //재귀적으로 함수 실행
}

init();


//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
// Mouse following animation example
const canvas = document.getElementById("cw");
const ctx = canvas.getContext("2d");
ctx.globalAlpha = 0.5; // 투명도 조절

// canvas 중심에 커서 x, y 좌표값 설정
const cursor = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

// particle을 담을 empty array 선언
let particlesArray = [];

generateParticles(101);
setSize();
anim();

// 마우스 움직임 인식해서 x,y 좌표값을 cursor 위치에 할당.
addEventListener("mousemove", (e) => {
  cursor.x = e.clientX;
  cursor.y = e.clientY;
});

// touchmove : 스크린에 손가락이 닿은 채로 움직일 때 실행
addEventListener(
  "touchmove",
  (e) => {
    e.preventDefault();
    cursor.x = e.touches[0].clientX;
    cursor.y = e.touches[0].clientY;
  },
  { passive: false }
);

// 스크린의 사이즈 비율을 수정하게 되면 같이 수정되도록 설정
addEventListener("resize", () => setSize());

// 파티클 생성 함수
function generateParticles(amount) {
  for (let i = 0; i < amount; i++) {
    // particlesArray 변수에 순서대로 할당
    particlesArray[i] = new Particle(
      innerWidth / 2, // x
      innerHeight / 2, // y
      4, // particleTrailWidth
      generateColor(),  // strokeColor
      0.02  // rotateSpeed
    );
  }
}

// 컬러 랜덤 생성 함수
function generateColor() {
  let hexSet = "0123456789ABCDEF";
  let finalHexString = "#";
  for (let i = 0; i < 6; i++) {
    finalHexString += hexSet[Math.ceil(Math.random() * 15)];
  }
  return finalHexString;
}


// 높이와 폭이 변할 때 캔버스 영역 수정
function setSize() {
  canvas.height = innerHeight;
  canvas.width = innerWidth;
}

// Particle 생성자 함수 정의
function Particle(x, y, particleTrailWidth, strokeColor, rotateSpeed) {
  this.x = x;
  this.y = y;
  this.particleTrailWidth = particleTrailWidth;
  this.strokeColor = strokeColor;
  this.theta = Math.random() * Math.PI * 2; // particle들으 위치를 랜덤하게 배치
  this.rotateSpeed = rotateSpeed;
  this.t = Math.random() * 150;

  this.rotate = () => {
    const ls = {
      x: this.x,
      y: this.y,
    };
    this.theta += this.rotateSpeed;
    this.x = cursor.x + Math.cos(this.theta) * this.t;
    this.y = cursor.y + Math.sin(this.theta) * this.t;
    ctx.beginPath();
    ctx.lineWidth = this.particleTrailWidth;
    ctx.strokeStyle = this.strokeColor;
    ctx.moveTo(ls.x, ls.y);
    ctx.lineTo(this.x, this.y);
    ctx.stroke();
  };
}

function anim() {
  requestAnimationFrame(anim);

  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  particlesArray.forEach((particle) => particle.rotate());
}

