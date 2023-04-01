const renderGameMenuBlock = (element) => {
  let clickable = true;

  const bodyHTML = document.querySelector("body");
  bodyHTML.innerHTML = "";

  const timerContainer = document.createElement("div");
  timerContainer.classList.add("timer-container");
  bodyHTML.appendChild(timerContainer);

  const timerContainerContent = document.createElement("div");
  timerContainerContent.classList.add("timer-container-content");
  timerContainer.appendChild(timerContainerContent);

  const timerContainerMinSSec = document.createElement("div");
  timerContainerMinSSec.classList.add("container-min-sec");
  timerContainerContent.appendChild(timerContainerMinSSec);

  const timerTitleMin = document.createElement("span");
  timerTitleMin.textContent = "min";
  timerTitleMin.classList.add("min", "timer-title");
  timerContainerMinSSec.appendChild(timerTitleMin);

  const timerTitleSec = document.createElement("span");
  timerTitleSec.textContent = "sec";
  timerTitleSec.classList.add("sec", "timer-title");
  timerContainerMinSSec.appendChild(timerTitleSec);

  const stopWatch = document.createElement("h2");
  stopWatch.textContent = "00:00";
  stopWatch.classList.add("stop-watch");
  timerContainerContent.appendChild(stopWatch);

  const btnRestart = document.createElement("button");
  btnRestart.textContent = "Начать заново";
  btnRestart.classList.add("btn", "btn-restart");
  timerContainer.appendChild(btnRestart);

  const cardsContainer = document.createElement("div");
  cardsContainer.classList.add("cards__container");
  bodyHTML.appendChild(cardsContainer);

  const imdsArray = renderImgArray(element);
  const duplicateCardsArray = duplicateArray(imdsArray);
  shuffle(duplicateCardsArray);

  duplicateCardsArray.forEach((element) => {
    const cardsItem = document.createElement("div");
    cardsItem.classList.add("cards");

    const notFlippedCardI = document.createElement("div");
    const flippedCardI = document.createElement("div");

    notFlippedCardI.classList.add("notflipped");
    flippedCardI.classList.add("flipped");

    notFlippedCardI.style.backgroundImage = "url(./img/shirt.png)";
    flippedCardI.style.backgroundImage = `url(./img/img-content/${element}`;

    cardsItem.append(flippedCardI, notFlippedCardI);
    cardsContainer.appendChild(cardsItem);

    const cards = document.querySelectorAll(".cards");

    cards.forEach((card) =>
      card.addEventListener("click", () => {
        if (clickable === true && !card.classList.contains("successfully")) {
          card.classList.add("flip");
        }
      })
    );

    cardsItem.style.backgroundImage = `url(./img/img-content/${element}`;
  });
};
