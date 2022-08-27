// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Transformations
//--------------------------------------------------------------------------------
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
//--------------------------------------------------------------------------------

//--------------------------------------------------------------------------------
// Canvas states are stored on a stack. Every time the save() method is called,
// the current drawing state is pushed onto the stack.

// 일시적으로 설정 값들을 save하고, 변경한 후 다른 작업을 하다가 원할 때 restore로
// 설정 값을 다시 불러오기
ctx.font = "14px";
ctx.save(); // save config
ctx.font = "30px serif"; // font = "30px serif"
// --- codes ---
ctx.restore(); // font = 14px
//--------------------------------------------------------------------------------

//--------------------------------------------------------------------------------
// canvas의 0,0 좌표를 원하는 위치로 변경
ctx.translate(x, y);

// canvas의 x, y 축의 각도를 회전 (각도가 radian으로 되어있다.)
ctx.rotate(angle); // radians = (Math.PI/180) * degrees <- radian 변환식

// 스케일 조절 (x, y에 -1을 주면 mirror 기능도 수행 가능)
ctx.scale(x, y);

// 변환 행렬을 직접 수정
ctx.transform(a, b, c, d, e, f);
// a (m11) - Horizontal scaling.
// b (m12) - Horizontal skewing.
// c (m21) - Vertical skewing.
// d (m22) - Vertical scaling.
// e (dx) - Horizontal moving.
// f (dy) - Vertical moving.

// This basically undoes the current transformation,
// then sets the specified transform, all in one step.
ctx.setTransform(a, b, c, d, e, f);

ctx.resetTransform(); // === ctx.setTransform(1, 0, 0, 1, 0, 0);
