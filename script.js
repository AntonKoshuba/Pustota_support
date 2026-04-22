
let phrases = [
  { text: 'ты не один в пустоте' },
  { text: 'чувствую любовь' },
  { text: 'чувствую благодарность' },
  { text: 'чувствую любовь и благодарность' },
  { text: 'благодать-то какая' },
  { text: 'твои слова вызывают во мне раздражение' },
  { text: 'бесишь, что ты прав' },
  { text: 'нет приглашения - нечего решать' },
  { text: 'могло быть хуже и стало' },
  { text: 'хочу об тебя поговорить' },
  { text: 'ну и что там еще из эпичного?' }
];

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

let usedIndices = [];
let autoplayInterval;

function getRandomElementWithoutRepeat() {
  if (usedIndices.length === phrases.length) {
    usedIndices = [];
  }
  
  let randIndex;
  do {
    randIndex = Math.floor(Math.random() * phrases.length);
  } while (usedIndices.includes(randIndex));
  
  usedIndices.push(randIndex);
  return phrases[randIndex];
}

function displayPhrase(phraseObj) {
  smoothly(phrase, 'textContent', phraseObj.text);

  if (phraseObj.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
}

function showNextPhrase() {
  displayPhrase(getRandomElementWithoutRepeat());
}

function startAutoplay() {
  clearInterval(autoplayInterval);
  autoplayInterval = setInterval(showNextPhrase, 4000);
}

button.addEventListener('click', function () {
  showNextPhrase();
  startAutoplay();
});

showNextPhrase();
startAutoplay();
