// ** think data model vs DOM **
// ** remember SRP **

// did I use all of these QS??????????
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

// *** make show & hide functions
    // will be cleaner!!
function show(element) {
  element.classList.remove('hidden');
}
function hide(element) {
  element.classList.add('hidden');
}

// var messageType;

// make this into at least 2!!! functions.
// what goes where???
// function typeOfMessage() {
//   if (chooseAffirmation.checked) {
//     messageType = affirmation;
//   } else if (chooseMantra.checked) {
//     messageType = mantra;
//   }
// }


function renderMessage() {
  var affirmationOption = affirmations[getRandomIndex(affirmations)];
  var mantraOption = mantras[getRandomIndex(mantras)];

  if (!chooseAffirmation.checked && !chooseMantra.checked) {
    event.preventDefault(getMessageBtn);
  }
  if (chooseAffirmation.checked) {
    showMessage.innerText = affirmationOption;
    hide(meditateIcon);
    show(showMessage);
  } else if (chooseMantra.checked) {
    showMessage.innerText = mantraOption;
    hide(meditateIcon);
    show(showMessage);
  }
}

function renderMainPage() {
  prevent(letsGoBtn);
  hide(loginPage);
  show(mainPage);
  userGreeting.innerText = `Hey there ${userName.value}!  Hope you're having a great day!`;
}

function prevent(event) {
  if (!userName.value) {
    event.preventDefault(letsGoBtn);
  }
}

// ********EXTRA
    // can I use Date() or whatever to make a more dynamic welcome message for user?!  probs >> how??
    // do I even want that as the welcome message
        // >>response to self: unsure what I want this to be at the moment

    // SOLID IDEA -- can I make the login Page btn work when user presses 'enter btn' on keyboard as an addition
        // found this on the internet: WTF
          // (document).keypress(function(e){
          //   if (e.which == 13){
          //     $("#userName").click();
          //   }
          // });
          //
                // can I make a keydown event instead of this
                // https://css-tricks.com/snippets/javascript/javascript-keycodes/
// can i write someting like --
  // document.addEventListener('keydown' or 'keypress', call both functions/ or do I use an anonymous function)

      // do I have to store userName.value somewhere in JS if I add 'submit' as an attribute


      // document.getElementById('name').addEventListener('keypress', function(event) {
      //     if (event.keyCode == 13) {
      //       event.preventDefault();
      //     }
      //   });


   //    ("#txtInput").on('keyup', function (event) {
   //    if (event.keyCode === 13) {
   //       console.log("Enter key pressed!!!!!");
   //    }
   // });


//    var input = document.getElementById("myInput");
// input.addEventListener("keyup", function(event) {
//     if (event.keyCode === 13) {
//         event.preventDefault();
//         document.getElementById("myBtn").click();
//     }
// });


              // OK DONE NOW.

    // CSS -- do I want to add a cool curser anywhere?
        // >>note to self: this is UNNECESSARY
