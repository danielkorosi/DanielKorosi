//Create a simple HTML document with one button. If the user clicks the button it should wait 2 seconds and it should show a text under the button: 2 seconds ellapsed

var button = document.querySelector('button');
var body = document.querySelector('body');
var text = document.createElement('div')
text.textContent = '2 seconds ellapsed';

function addText() {
  body.appendChild(text);
};

var clickCounter = 0;
function clickCount() {
  clickCounter += 1;
  if (clickCounter === 3) {
    addText()
  }
}

/*var start
function delay() {
  setTimeout(addText, 5000);

}*/


button.addEventListener('click', clickCount);
//button.addEventListener('click', delay);
