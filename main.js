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

function renderMainPage() {
  prevent();
  loginPage.classList.add('hidden');
  mainPage.classList.remove('hidden');
  userGreeting.innerText = `Hello ${userName.value}!  Hope you're having a great day!`;
}

function prevent(event) {
  if (!userName.value) {
    event.preventDefault();
  }
}

// LOGIN PAGE
// task1 >> refactor application so user lands on a 'login' page
// task2 >> the login page needs to match style of application
// task3 >> the login page should contain an input for a user to enter their name and a submit button

// task4 >> after the user clicks the submit button, they are taken to the main page of the application where they will see a personalized greeting that displays their name and a welcome message
// task5 >> the welcome message & name should appear in a logical place

  // write HTML for loginPage
  // work through CSS for it as well
  // am i gonna hide/show in HTML or use .innerHTML to show code
  // make addEventListener for window on page load

  // create QS for loginPage, input field, & button
  // add event addEventListener for button 'click'
  // create function to respond the button click and bring the user to the main page
    // view mainPage / hide loginPage
    // display user name to mainPage ???
