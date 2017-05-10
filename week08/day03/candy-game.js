//Gather 10.000 candies!
//Clicking the ‘Create candies’ button gives you 1 candy.
//You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
//10 lollipops generate 1 candy per second.
//Use the 🍭 emoji to display the lollipops you have
//Display the candy producton rate in the Candies / Second row
//If you press the "make candy rain" button, the candy generation should speed up 10x

var candyButton = document.querySelector('.create-candies');
candyButton.addEventListener('click', countCandy);

var numCandy = document.querySelector('dl .candies');
var count = 0;
function countCandy() {
  count += 1;
  numCandy.innerHTML = count;
}

var lollyButton = document.querySelector('.buy-lollypops');
var lollyIcons = document.querySelector('.lollypops');
lollyButton.addEventListener('click', buyLollypop)

function buyLollypop() {
  if (count >= 100) {
    lollyIcons.textContent += '🍭';
    count -= 100;
    numCandy.innerHTML = count;
  }

}
