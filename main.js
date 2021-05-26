// ** think data model vs DOM **
// ** remember SRP **

var chooseAffirmation = document.querySelector('#affirmation');
var chooseMantra = document.querySelector('#mantra');
var meditateIcon = document.querySelector('#meditateIcon');
var showMessage = document.querySelector('#statementHere');
var messageBox = document.querySelector('#messageBox');
var getMessageBtn = document.querySelector('#getMessageBtn');

getMessageBtn.addEventListener('click', renderMessage);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function renderMessage() {
  meditateIcon.classList.add('hidden');
  showMessage.classList.remove('hidden');
  var affirmationOption = affirmations[getRandomIndex(affirmations)];
  var mantraOption = mantras[getRandomIndex(mantras)];

  if (chooseAffirmation.checked) {
    showMessage.innerText = affirmationOption;
  } else if (chooseMantra.checked) {
    showMessage.innerText = mantraOption;
  }
}
