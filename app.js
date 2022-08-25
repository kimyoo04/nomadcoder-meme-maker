const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(50, 50, 100, 200);
ctx.strokeRect(200, 50, 100, 200);
