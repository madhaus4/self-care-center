var chooseAffirmation = document.querySelector('#affirmation');
var chooseMantra = document.querySelector('#mantra');
var meditateIcon = document.querySelector('#meditateIcon');
var mainPage = document.querySelector('#mainPage');
var loginPage = document.querySelector('#loginPage');
var userName = document.querySelector('#userName');
var userGreeting = document.querySelector('#userGreeting');
var showMessage = document.querySelector('#statementHere');
var getMessageBtn = document.querySelector('#getMessageBtn');
var letsGoBtn = document.querySelector('#letsGoBtn');

var messageType;

getMessageBtn.addEventListener('click', renderMessage);
letsGoBtn.addEventListener('click', renderMainPage);


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}

function renderMainPage() {
  if (userName.value) {
    letsGoBtn.disabled = false;
    hide(loginPage);
    show(mainPage);
    userGreeting.innerText = `Hey there ${userName.value}!  Hope you're having a great day!`;
  }
  return;
}

function renderMessage() {
  var affirmationOption = affirmations[getRandomIndex(affirmations)];
  var mantraOption = mantras[getRandomIndex(mantras)];

  if (!chooseAffirmation.checked && !chooseMantra.checked) {
    event.preventDefault(getMessageBtn);
  }
  if (chooseAffirmation.checked) {
    displayMessage(affirmationOption);
  } else if (chooseMantra.checked) {
    displayMessage(mantraOption);
  }
}

function displayMessage(message) {
  messageType = message;
  showMessage.innerText = messageType;
  hide(meditateIcon);
  show(showMessage);
}
