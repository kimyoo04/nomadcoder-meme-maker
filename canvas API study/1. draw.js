// canvas 태그를 가져온다.
const canvas = document.querySelector("canvas");

//--------------------------------------------------------------------------------
// canvas.getContext(contextType, contextAttributes);
// contextType = 캔버스에 연관된 드로잉 컨텍스트를 정의하는 컨텍스트 식별자를 갖는 DOMString입니다. (값은 2d, webgl, webgl2, bitmaprenderer 중 하나)
// contextAttributes = 렌더링 컨텍스트를 생성할 때 몇 가지 컨텍스트 속성을 사용할 수 있습니다.  (옵션 설정)
// https://developer.mozilla.org/ko/docs/Web/API/HTMLCanvasElement/getContext
const ctx = canvas.getContext("2d"); //ctx는 context의 줄임말
//--------------------------------------------------------------------------------

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

//--------------------------------------------------------------------------------
// 캔버스 사이즈 정의
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
//--------------------------------------------------------------------------------

//--------------------------------------------------------------------------------
// 면사각형 생성 ctx.fillRect(x, y, w, h)
ctx.fillRect(50, 50, 100, 200);
// 선사각형 생성 ctx.strokeRect(x, y, width, height)
ctx.strokeRect(200, 50, 100, 200);
// 사각형 영역 지우기 ctx.clearRect(x, y, width, height)
ctx.clearRect(x, y, width, height);
// 사각형의 path 만 생성
ctx.rect(x, y, width, height);
//--------------------------------------------------------------------------------

//--------------------------------------------------------------------------------
// canvas의 좌표는 왼쪽 위부터 0,0 으로 시작한다.
//--------------------------------------------------------------------------------

//--------------------------------------------------------------------------------
// 새로운 Path 시작, 이전과 지금 그리려는 선을 구분하는 역할.
ctx.beginPath();
// 그리려는 선의 시작점 x, y 좌표
ctx.moveTo(75, 50);
// 시작점에서 그려서 도착한 x, y 좌표
ctx.lineTo(100, 75);
ctx.lineTo(100, 25);
// 그려진 선을 따라 내측에 면을 생성
ctx.fill();
// 그려진 선을 따라 선 그리기
ctx.stroke();
//--------------------------------------------------------------------------------

//--------------------------------------------------------------------------------
// 호(원) 그리기 ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise?)
ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
// 호 그리기 ctx.arcTo(x1, y1, x2, y2, radius);
ctx.arcTo(75, 75, 100, 100, 20);
//--------------------------------------------------------------------------------

//--------------------------------------------------------------------------------
// 시작점에서 x, y 좌표까지 그리되, cp1x, cp1y 좌표가 시작과 끝점의 사이에 힘이 작용
// 해 선을 휘게 만든다. rhino프로그램의 curve 명령과 비슷
ctx.quadraticCurveTo(cp1x, cp1y, x, y);
// 시작점에서 x, y 좌표까지 그리되, cp1x, cp1y와 cp2x, cp2y 좌표 두개가 시작과 끝점
// 에 한개 씩 작용하여 힘이 작용해 선을 휘게 만든다. 일러스트의 펜 툴과 비슷
ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
//--------------------------------------------------------------------------------

//--------------------------------------------------------------------------------
// A utility function to draw a rectangle with rounded corners.
function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.arcTo(x, y, x, y + radius, radius);
  ctx.stroke();
}
//--------------------------------------------------------------------------------

//--------------------------------------------------------------------------------
// Path2D objects
// The Path2D() constructor returns a newly instantiated Path2D object, optionally
// with another path as an argument (creates a copy), or optionally with a string
// consisting of SVG path data.
Path2D.addPath(path[transform]);

// Path2D example
function draw() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    const rectangle = new Path2D();
    rectangle.rect(10, 10, 50, 50);

    const circle = new Path2D();
    circle.arc(100, 35, 25, 0, 2 * Math.PI);

    ctx.stroke(rectangle);
    ctx.fill(circle);
  }
}

// Using SVG Paths
// move to point (M10 10) and then move horizontally 80 points to the right (h 80),
// then 80 points down (v 80), then 80 points to the left (h -80), and then back to
// the start (z)
// https://developer.mozilla.org/en-US/docs/Web/API/Path2D/Path2D#using_svg_paths
const p = new Path2D("M10 10 h 80 v 80 h -80 Z");
//--------------------------------------------------------------------------------
