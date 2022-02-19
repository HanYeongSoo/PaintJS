const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d"); // canvasAPI를 위한 첫 선언
const colors = document.getElementsByClassName("controls__color jsColors");

canvas.width = 660; // canvas의 크기를 처음에 설정했던 canvas칸과 같게 설정해줘야 적용됨
canvas.height = 660;

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
    ctx.beginPath(); // path를 통해 x, y 좌표료 바꿔줌
    ctx.moveTo(x, y); // 바뀐 x, y 좌표로 계속 떠다니는 중임..
  } else {
    ctx.lineTo(x, y); // 마우스를 누르는 동안..
    ctx.stroke(); // 기본 색을 적용한 선이 그려짐
  }
}

function handleColorClick(event) {
  //   console.log(event.target.style.backgroundColor);
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove); // canvas안에서 움직이는 좌표
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColorClick)
);
