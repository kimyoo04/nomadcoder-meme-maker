// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas
//--------------------------------------------------------------------------------
// Performance tips
// The following is a collection of tips to improve canvas performance.

// 1. Pre-render similar primitives or repeating objects on an offscreen canvas
// 2. Avoid floating-point coordinates and use integers instead
// 3. Don't scale images in drawImage
// 4. Use multiple layered canvases for complex scenes (캔버스를 여러개 선언하기)
// 5. Use multiple layered canvases for complex scenes
// 6. Scaling canvas using CSS transforms
// 7. Turn off transparency - const ctx = canvas.getContext('2d', { alpha: false });
// 8. Scaling for high resolution displays

// more tips
// - Scaling for high resolution displays
// - Avoid unnecessary canvas state changes.
// - Avoid the shadowBlur property whenever possible.
// - Avoid text rendering whenever possible.
// - With animations, use window.requestAnimationFrame() instead of setInterval()
// - Be careful with heavy physics libraries.
