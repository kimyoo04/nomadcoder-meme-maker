const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

//--------------------------------------------------------------------------------
// inputs
//--------------------------------------------------------------------------------
// color input
const color = document.getElementById("color");
// range iuput (선 굵기 값)
const lineWidth = document.getElementById("line-width");
// file input
const fileInput = document.getElementById("file");
// text input
const textInput = document.getElementById("text");

//--------------------------------------------------------------------------------
// buttons
//--------------------------------------------------------------------------------
// 모드 변경 (fill / line)
const modeBtn = document.getElementById("mode-btn");
// 전체 지우기
const destroyBtn = document.getElementById("destroy-btn");
// 지우개
const eraserBtn = document.getElementById("eraser-btn");
// 컬러 array
const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
);
// 이미지 다운로드
const saveBtn = document.getElementById("save");
//--------------------------------------------------------------------------------
// variables
//--------------------------------------------------------------------------------
// canvas size
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

//--------------------------------------------------------------------------------
// init settings
//--------------------------------------------------------------------------------
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
ctx.lineWidth = lineWidth.value;
ctx.lineCap = "round";

//--------------------------------------------------------------------------------
// states
//--------------------------------------------------------------------------------
let isPainting = false;
let isFilling = false;

//--------------------------------------------------------------------------------
// onMove function - isPainting이 true 일 때 선을 그린다.
//--------------------------------------------------------------------------------
function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
}

//--------------------------------------------------------------------------------
// startPainting function - isPainting을 false에서 true로 바꾼다.
//--------------------------------------------------------------------------------
function startPainting() {
  isPainting = true;
}

//--------------------------------------------------------------------------------
// cancelPainting function - isPainting을 true에서 false로 바꾼다..
//--------------------------------------------------------------------------------
function cancelPainting() {
  isPainting = false;
  ctx.beginPath();
}

//--------------------------------------------------------------------------------
// onLineWidthChange function - 선의 굵기 재할당
//--------------------------------------------------------------------------------
function onLineWidthChange(event) {
  ctx.lineWidth = event.target.value;
}

//--------------------------------------------------------------------------------
// onColorChange function - input color가 change될 때, ctx의 color 재할당
//--------------------------------------------------------------------------------
function onColorChange(event) {
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
}

//--------------------------------------------------------------------------------
// onColorClick function - 네모모양의 div태그를 클릭 했을 때, ctx의 color 재할당
//--------------------------------------------------------------------------------
function onColorClick(event) {
  const colorValue = event.target.dataset.color;
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  color.value = colorValue;
}

//--------------------------------------------------------------------------------
// onModeClick function - isFilling의 값따라 버튼의 innerText 변경, isFilling 변경
//--------------------------------------------------------------------------------
function onModeClick() {
  if (isFilling) {
    isFilling = false;
    modeBtn.innerText = "Fill";
  } else {
    isFilling = true;
    modeBtn.innerText = "Draw";
  }
}

//--------------------------------------------------------------------------------
// onCanvasClick function - 캔버스 클릭할 때, canvas에 fillRect 실행 (색 채우기)
//--------------------------------------------------------------------------------
function onCanvasClick() {
  if (isFilling) {
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  }
}

//--------------------------------------------------------------------------------
// onDestroyClick function - destroyBtn 클릭했을 때, 흰색으로 캔버스 칠하기
//--------------------------------------------------------------------------------
function onDestroyClick() {
  ctx.save();
  ctx.fillStyle = "white";
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.restore();
}

//--------------------------------------------------------------------------------
// onEraserClick function - eraserBtn 클릭했을 때, stroke를 흰색으로 바꿈
//--------------------------------------------------------------------------------
function onEraserClick() {
  ctx.strokeStyle = "white";
  isFilling = false;
  modeBtn.innerText = "Fill";
}

//--------------------------------------------------------------------------------
// onFileChange function - 이미지 파일 업로드 시, 이미지를 캔버스에 꽉차게 그리기
//--------------------------------------------------------------------------------
function onFileChange(event) {
  const file = event.target.files[0];
  const url = URL.createObjectURL(file);
  const image = new Image();
  image.src = url;
  image.onload = function () {
    ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    fileInput.value = null;
  };
}

//--------------------------------------------------------------------------------
// onDoubleClick function - 캔버스에 더블 클릭할 때, canvas에 텍스트 그리기
//--------------------------------------------------------------------------------
function onDoubleClick(event) {
  const text = textInput.value;
  if (text !== "") {
    ctx.save();
    ctx.lineWidth = 1; // 굵기 조절 input 기능 넣기
    ctx.font = "68px sans-serif"; // 폰트 사이즈와 폰트 선택 기능 넣기
    ctx.fillText(text, event.offsetX, event.offsetY);
    ctx.restore();
  }
}

//--------------------------------------------------------------------------------
// onSaveClick function - saveBtn 클릭할 때, 이미지 png로 다운로드
//--------------------------------------------------------------------------------
function onSaveClick() {
  const url = canvas.toDataURL(); // 이미지 url 생성
  const a = document.createElement("a"); // a 태그 임시 생성
  a.href = url; // href 어트리뷰트에 url 할당
  a.download = "myDrawing.png"; // 다운로드시 기본 파일명 설정
  a.click(); // a 테그 자동 클릭
}

//--------------------------------------------------------------------------------
// addEventListener
//--------------------------------------------------------------------------------
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("click", onCanvasClick);

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);
fileInput.addEventListener("change", onFileChange);
canvas.addEventListener("dblclick", onDoubleClick);

colorOptions.forEach((color) => color.addEventListener("click", onColorClick));
modeBtn.addEventListener("click", onModeClick);
destroyBtn.addEventListener("click", onDestroyClick);
eraserBtn.addEventListener("click", onEraserClick);
saveBtn.addEventListener("click", onSaveClick);
//--------------------------------------------------------------------------------
