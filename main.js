// ** think data model vs DOM **
// ** remember SRP **

var chooseAffirmation = document.querySelector('#affirmation');
var chooseMantra = document.querySelector('#mantra');
var meditateIcon = document.querySelector('#meditateIcon');
var showMessage = document.querySelector('#statementHere');
var messageBox = document.querySelector('#messageBox');
var getMessageBtn = document.querySelector('#getMessageBtn');

var mainPage = document.querySelector('#mainPage');
var loginPage = document.querySelector('#loginPage');
var userName = document.querySelector('#userName');
var letsGoBtn = document.querySelector('#letsGoBtn');
var userGreeting = document.querySelector('#userGreeting');

getMessageBtn.addEventListener('click', renderMessage);
letsGoBtn.addEventListener('click', renderMainPage);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function renderMessage() {
  var affirmationOption = affirmations[getRandomIndex(affirmations)];
  var mantraOption = mantras[getRandomIndex(mantras)];

  if (!chooseAffirmation.checked && !chooseMantra.checked) {
    event.preventDefault(getMessageBtn);
  }
  if (chooseAffirmation.checked) {
    showMessage.innerText = affirmationOption;
    meditateIcon.classList.add('hidden');
    showMessage.classList.remove('hidden');
  } else if (chooseMantra.checked) {
    showMessage.innerText = mantraOption;
    meditateIcon.classList.add('hidden');
    showMessage.classList.remove('hidden');
  }
}

function renderMainPage() {
  prevent(letsGoBtn);
  loginPage.classList.add('hidden');
  mainPage.classList.remove('hidden');
  userGreeting.innerText = `Hey there ${userName.value}!  Hope you're having a great day!`;
}

function prevent(event) {
  if (!userName.value) {
    event.preventDefault(letsGoBtn);
  }
}
