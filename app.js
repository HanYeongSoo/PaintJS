const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d"); // canvasAPI를 위한 첫 선언
const colors = document.getElementsByClassName("controls__color jsColors");
const range = document.querySelector("#jsRange");
const mode = document.querySelector("#jsMode");

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 660;

canvas.width = CANVAS_SIZE; // canvas의 크기를 처음에 설정했던 canvas칸과 같게 설정해줘야 적용됨
canvas.height = CANVAS_SIZE;

ctx.strokeStyle = INITIAL_COLOR; // 그림을 처음 시작 할 시 색상
ctx.lineWidth = 2.5; // 그림을 처음 시작할 때 기본 굵기 설정

ctx.fillStyle = INITIAL_COLOR;

let painting = false;
let filling = false;

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
  ctx.fillStyle = color;
}

function handleRangeChange(event) {
  const gauge = event.target.value;
  ctx.lineWidth = gauge;
}

function handleModeClick() {
  if (filling === true) {
    filling = false;
    mode.innerText = "fill";
  } else {
    filling = true;
    mode.innerText = "paint";
  }
}

function handleCanvasClick() {
  if (filling === true) {
    // filling이 true라는 것은 사이트에서 보이는 버튼이 paint가 보이고 있다는 뜻
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // ctx.fillStyle에 들어온 색상이 fillRect안의 구역만큼 칠해지는거임
    // 즉 색상을 클릭하면서 fillStyle에 색상이 저장되고
    // (0, 0 , 크기만큼) === 구역 전체에 그 색상이 차게 되는거
  } else {
  }
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove); // canvas안에서 움직이는 좌표
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
}

Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColorClick)
);

if (range) {
  range.addEventListener("input", handleRangeChange);
}

if (mode) {
  mode.addEventListener("click", handleModeClick);
}
