let fox = new XMLHttpRequest();
fox.open('GET', 'http://api.giphy.com/v1/gifs/search?q=fox&api_key=dc6zaTOxFJmzC', true);
fox.send();
fox.onreadystatechange = getState;

function getState() {
  console.log(fox);
}

fox.onreadystatechange = function () {
 if (fox.readyState === 4 && fox.status === 200) {
    console.log(fox.response);
  }
}
