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
  var affirmationOption = affirmations[getRandomIndex(affirmations)];
  var mantraOption = mantras[getRandomIndex(mantras)];

  messageBox.innerHTML = '';
  if (chooseAffirmation.checked) {
    messageBox.innerHTML = affirmationOption;
  } else if (chooseMantra.checked) {
    messageBox.innerHTML = mantraOption;
  }
}
