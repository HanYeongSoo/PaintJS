const canvas = document.querySelector("#jsCanvas");

let painting = false;

function stopPainting() {
  painting = false;
}

function onMouseMove(event) {
  //   console.log(event);
  const offsetX = event.offsetX;
  const offsetY = event.offsetY;
  //   console.log(offsetX, offsetY);
}

function onMouseDown(event) {
  painting = true;
}

function onMouseUp(event) {
  stopPainting();
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", onMouseUp);
  canvas.addEventListener("mouseleave", stopPainting);
}
