// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas
//--------------------------------------------------------------------------------
// 나중에 이미지 전처리 혹은 유저의 이미지를 처리해야할 시 canvas api로 활용가능
// imageData object, context에서 pixel data 얻기,
// 색상 값 수정 후 canvas에 다시 그리기
// color picker구현 가능
//--------------------------------------------------------------------------------

//--------------------------------------------------------------------------------
// Saving images
// Default setting. Creates a PNG image.
canvas.toDataURL("image/png"); // <-- 이미지의 data url을 96 dpi로 반환 (기본 png)

// JPG 생성
canvas.toDataURL("image/jpeg", quality); // <-- quallity 는 0 부터 1 사이 값

// 캔버스에 그려진 것을 Bolb object 로 생성
canvas.toBlob(_callback_, _type_, _encoderOptions_);
//--------------------------------------------------------------------------------
