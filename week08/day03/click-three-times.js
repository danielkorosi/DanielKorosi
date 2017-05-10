//Create a simple HTML document with one button. If the user clicks the button 3 times, and 5 seconds is already ellapsed since the page is loaded, a text should apper under the button: 5 seconds ellapsed and clicked 3 times


var button = document.querySelector('button');
var body = document.querySelector('body');
var text = document.createElement('div')
text.textContent = '5 seconds ellapsed and clicked 3 times';

function addText() {
  body.appendChild(text);
};

var clickCounter = 0;
function clickCount() {
  clickCounter += 1;
  if (clickCounter === 3) {
    addText()
  }
};

button.addEventListener('click', clickCount);
//setTimeout(addText, 5000);
