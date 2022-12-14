// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_text
//--------------------------------------------------------------------------------
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
//--------------------------------------------------------------------------------

//--------------------------------------------------------------------------------
// 채움 텍스트 입력
ctx.fillText(text, x, y[maxWidth]);
// 선 텍스트 입력
ctx.strokeText(text, x, y[maxWidth]);
//--------------------------------------------------------------------------------

//--------------------------------------------------------------------------------
// font size, font style 입력
ctx.font = "48px serif"; // default font is 10px sans-serif.
// font wjd
ctx.textAlign = value; // start, end, left, right, center
// 기본 값 alphabetic
ctx.textBaseline = value; // top, hanging, middle, alphabetic, ideographic, bottom
// 글자 방향
ctx.direction = value; // ltr, rtl, inherit. 기본 값 inherit
//--------------------------------------------------------------------------------

//--------------------------------------------------------------------------------
// measureText() 스킵
//--------------------------------------------------------------------------------
