// ** think data model vs DOM **
// ** remember SRP **

// *task1 >> when a user selects a msg option and clicks the 'receive msg' btn, a random message from that category will display

// create QS for affirmation, mantra, getMessageBtn
var chooseAffirmation = document.querySelector('#affirmation');
var chooseMantra = document.querySelector('#mantra');
var getMessageBtn = document.querySelector('#getMessageBtn');
var showMessage = document.querySelector('#statementHere');
var meditateIcon = document.querySelector('#meditateIcon');
var messageBox = document.querySelector('#messageBox');

// add event listener for getMessageBtn to listen for click
getMessageBtn.addEventListener('click', renderMessage);
// create function chooseMsgType() >> responds to click
  // deciphers which btn has been checked
    // if affirmation, then
    // if mantra, then
function renderMessage() {
  var affirmationOption = affirmations[getRandomIndex(affirmations)];
  var mantraOption = mantras[getRandomIndex(mantras)];

  messageBox.innerHTML = '';
  if (chooseAffirmation.checked) {
    messageBox.innerHTML = affirmationOption;
    console.log('affirmation', affirmationOption);
  } else if (chooseMantra.checked) {
    messageBox.innerHTML = mantraOption;
    console.log('mantra', mantraOption);
  }
}

// create function displayMsg()
  // dispalys whichever msg type has been checked by user
  // use .innerHTML or .innerText to adapt var to user choice
  // invoke function in chooseMsgType
// function renderMessage() {
//
// }

// build a getRandomIndex() using Math.floor() to cycle through affirmations and mantras arrays
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}



// *task2 >> when the msg appears, the meditation icon disappears from the msg area
  // make QS for meditateIcon
  // make QS for statementHere

// create show() and hide() functions?
