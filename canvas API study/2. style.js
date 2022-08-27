// https://developer.mozilla.org/ko/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors
//--------------------------------------------------------------------------------
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
//--------------------------------------------------------------------------------

//--------------------------------------------------------------------------------
// Colors
// 면 색 설정
ctx.fillStyle = color;
// 선 색 설정
ctx.strokeStyle = color;
// 위 color 자리에 들어가는 방식은 css와 동일, 큰따옴표로 감싸기
// 각 도형에 다른 색을 적용하려면 fillStyle 또는 strokeStyle 속성을 다시 적용한다.
//--------------------------------------------------------------------------------

//--------------------------------------------------------------------------------
// 투명도
ctx.fillStyle = rgba(0, 0, 0, 0.4);

// 투명값 설정 따로 가능
ctx.globalAlpha = 0.2;
//--------------------------------------------------------------------------------

//--------------------------------------------------------------------------------
// 선 모양
// 현재 선의 두께를 설정
ctx.lineWidth = value; //초기 값 1.0
// 선의 끝점 모양을 결정
ctx.lineCap = type; // 초기 값 butt (butt, round, square)
// 선, 호, 곡선들이 연결되는 지점의 모양을 결정
ctx.lineJoin = type; // 초기 값 miter (round, bevel, miter)
// miter로 하여 두 선이 연결되면, 연결되는 두 선의 바깥쪽 테두리는 연장선이 만나는
// 지점까지 확장
ctx.miterLimit = value; // 초기 값 10.0

//--------------------------------------------------------------------------------
// 점선 그리기
ctx.getLineDash();
ctx.setLineDash(segments);
ctx.lineDashOffset = value;

const ctx = document.getElementById("canvas").getContext("2d");
const offset = 0;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.setLineDash([4, 2]);
  ctx.lineDashOffset = -offset;
  ctx.strokeRect(10, 10, 100, 100);
}

function march() {
  offset++;
  if (offset > 16) {
    offset = 0;
  }
  draw();
  setTimeout(march, 20);
}

march();
//--------------------------------------------------------------------------------

//--------------------------------------------------------------------------------
// 그라디언트
// 선형 그라디언트 생성
ctx.createLinearGradient(x1, y1, x2, y2);
// 원형 그라디언트
ctx.createRadialGradient(x1, y1, r1, x2, y2, r2);
ctx.gradient.addColorStop(position, color); // position은 0 - 1 사이 값

// ex)
const lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
lineargradient.addColorStop(0, "white");
lineargradient.addColorStop(1, "black");

// strokeStyle과 fillStyle 속성 모두 canvasGradient 오브젝트를 속성 값으로 가능
//--------------------------------------------------------------------------------

//--------------------------------------------------------------------------------
// 패턴, 그림자, 캔버스 채우기 규칙 스킵!!
//--------------------------------------------------------------------------------
