// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images
//--------------------------------------------------------------------------------
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
//--------------------------------------------------------------------------------

//--------------------------------------------------------------------------------
// using Image() constructor
const img = new Image(); // Create new img element
img.src = "myImage.png"; // Set source path
//--------------------------------------------------------------------------------

//--------------------------------------------------------------------------------
// image가 불러오기전에 drawimage 하지 않게 pre-loading tactics을 알 필요가 있다.
// data:URL 로 image 포함시키기 (단점 - be not cached, big images become long urls)
const img = new Image(); // Create new img element
img.src =
  "data:image/gif;base64,R0lGODlhCwALAIAAAAAA3pn/ZiH5BAEAAAEALAAAAAALAAsAAAIUhA+hkcuO4lmNVindo7qyrIXiGBYAOw==";
//--------------------------------------------------------------------------------

//--------------------------------------------------------------------------------
// 이미지를 캔버스의 x, y 좌표에 삽입
ctx.drawImage(image, x, y);

// width와 height는 이미지의 스케일을 변경 시킨다.
ctx.drawImage(image, x, y, width, height);

// image crop (slice)
// - sx, sy는 이미지를 기준으로 왼쪽 위의 포인트로 자를 위치를 나타냄
// - sWidth, sHeight, 자를 이미지의 폭과 높이
// - d가 붙는 파라미터는 definition의 의미로 배치와 실제 이미지 사이즈를 설정하는 것
ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
