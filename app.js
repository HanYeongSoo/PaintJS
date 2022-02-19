const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext("2D"); // canvasAPI를 위한 첫 선언

ctx.strokeStyle = "#2c2c2c"; // 그림을 처음 시작 할 시 색상
ctx.lineWidth = 2.5; // 그림을 처음 시작할 때 기본 굵기 설정

let painting = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(event) {
  //   console.log(event);
  const x = event.offsetX;
  const y = event.offsetY;
  //   console.log(offsetX, offsetY);

  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function onMouseDown(event) {
  painting = true;
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}
