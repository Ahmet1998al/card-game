const renderImgArray = (element) => {
  let arrayCard = [];
  const rang = ["6", "7", "8", "9", "10", "j", "q", "k", "t"];
  const suit = ["b", "c", "k", "p"];
  for (let i = 0; i < element / 2; i++) {
    const randomRang = Math.floor(Math.random() * rang.length);
    const randomSuit = Math.floor(Math.random() * suit.length);
    const randomCard = rang[randomRang] + suit[randomSuit] + ".png";
    arrayCard.push(randomCard);
  }
  return arrayCard;
};

const duplicateArray = (array) =>
  array.reduce((res, current) => res.concat([current, current]), []);

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};
