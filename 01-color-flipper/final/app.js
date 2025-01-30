const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const newnumber = generateRandomNumber();
  // console.log(randomNumber);

  document.body.style.backgroundColor = colors[newnumber];
  color.textContent = colors[newnumber];
});

function generateRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
