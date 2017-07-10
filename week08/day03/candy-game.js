//Gather 10.000 candies!
//Clicking the ‘Create candies’ button gives you 1 candy.
//You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
//10 lollipops generate 1 candy per second.
//Use the 🍭 emoji to display the lollipops you have
//Display the candy producton rate in the Candies / Second row
//If you press the "make candy rain" button, the candy generation should speed up 10x

var candyButton = document.querySelector('.create-candies');
var lollyButton = document.querySelector('.buy-lollypops');
var lollyIcons = document.querySelector('.lollypops');

var numCandy = document.querySelector('dl .candies');
var count = 0;

candyButton.addEventListener('click', countCandy);
lollyButton.addEventListener('click', buyLollypop);

function countCandy() {
  count += 1;
  numCandy.innerHTML = count;
}

function buyLollypop() {
  if (count >= 10){
    lollyIcons.innerHTML += '🍭';
    count -= 10;
    numCandy.innerHTML = count;
  }
}

function candyForLolly() {
  if (lollyIcons.textContent.length >= 20) {
    var lolly = Math.floor(lollyIcons.innerHTML.length/2)/10);
    count += lolly;
    numCandy.innerHTML = count;
  }
}

setInterval(candyForLolly, 1000)
