
 let phrases = [
            { text: 'ты не один в пустоте' },
            { text: 'чувствую любовь' },
            { text: 'чувствую благодраность' },
            { text: 'чувствую любовь и благодарность' },
            { text: 'благодать-то какая' },
            { text: 'твои слова вызывают во мне раздражение' },
            { text: 'бесишь, что ты прав' },
            { text: 'нет приглашения — нечего решать' },
            { text: 'могло быть хуже и стало' },
            { text: 'хочу об тебя поговорить' },
            { text: 'ну и что там еще из эпичного?' }
        ];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
  let randomElement = getRandomElement (phrases);
  smoothly (phrase, "textContent", randomElement.text)

  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
});

for (let i = 0; i <= 2; i = i + 1) {
  smoothly(phrase, "textContent", phrases[i].text);
}