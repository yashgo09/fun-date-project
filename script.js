const noBtn = document.querySelector(".btn--no");

console.log(noBtn);

const randomPosition = [
  { translate: "-500px -200px" },
  { translate: "-100px -100px" },
  { translate: "200px -500px" },
  { translate: "100px 500px" },
];

let count = 0;

function setRandomPosition(element) {
  if (count >= randomPosition.length) count = 0;

  element.animate(
    {
      translate: randomPosition[count++].translate,
    },
    {
      duration: 500,
      fill: "forwards",
      easing: "ease",
    }
  );
}

noBtn.addEventListener("mouseenter", (e) => {
  noBtn.classList.add("move");
  setRandomPosition(e.target);
});

noBtn.addEventListener("click", (e) => {
  noBtn.classList.add("move");
  setRandomPosition(e.target);
});
