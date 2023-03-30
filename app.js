//url api country quizz
const url = "https://restcountries.com/v2/all";
const container = document.querySelector(".options");
let button1 = document.createElement("button");
let button2 = document.createElement("button");
let button3 = document.createElement("button");
let button4 = document.createElement("button");
let btnEnd = document.querySelector(".end");
let scoreContain = document.querySelector(".score");
let divContainer = document.querySelector(".container");
let notification = document.querySelector(".notification");
let buttons;
let correctButtonIndex;
let score = 0;

const image = document.querySelector(".image");
async function getCountry(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}
getCountry(url).then((data) => {
  renderCountry(data);
  selectCountry(button1, data);
  selectCountry(button2, data);
  selectCountry(button3, data);
  selectCountry(button4, data);
});

function randomFlag() {
  let random = Math.floor(Math.random() * 250);
  return random;
}
function renderCountry(data) {
  const randomIndex = randomFlag();
  const correctName = data[randomIndex].name;
  image.src = data[randomIndex].flags.png;

  // mettre les boutons dans un tableau
  const buttonNames = [
    correctName,
    data[randomFlag()].name,
    data[randomFlag()].name,
    data[randomFlag()].name,
  ];

  //melanger les boutons
  buttonNames.sort(() => Math.random() - 0.5);

  // mettre les noms des boutons dans les boutons
  button1.innerHTML = buttonNames[0];
  button2.innerHTML = buttonNames[1];
  button3.innerHTML = buttonNames[2];
  button4.innerHTML = buttonNames[3];

  //donner la valeur correct au bouton correct
  correctButtonIndex = buttonNames.indexOf(correctName);
  buttons = [button1, button2, button3, button4];
  buttons[correctButtonIndex].value = "correct";

  // Add all buttons to the container
  container.appendChild(button1);
  container.appendChild(button2);
  container.appendChild(button3);
  container.appendChild(button4);
}
function selectCountry(button, data) {
  button.addEventListener("click", () => {
    if (button.value === "correct") {
      notification.innerHTML = "Correct";
      setTimeout(() => {
        notification.innerHTML = "";
      }, 1000);
      score++;
      buttons[correctButtonIndex].value = "";
      renderCountry(data);
    } else if (button.value === "") {
      notification.innerHTML = "Wrong";
      setTimeout(() => {
        notification.innerHTML = "";
      }, 1000);
      buttons[correctButtonIndex].value = "";
      renderCountry(data);
    }
    scoreContain.innerHTML = score;
  });
}
function endQuiz() {
  alert("Your score is " + score);
  let h1 = document.createElement("h1");
  h1.innerHTML = "Votre score est de" + " " + score;
  divContainer.innerHTML = "";
  divContainer.appendChild(h1);
}
btnEnd.addEventListener("click", endQuiz);
