var request = new XMLHttpRequest();

request.open('GET', 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=apollo+11&api_key=0e316cc3d899414ab623037473ae6466', true);
request.send(null);

var article = document.querySelector('article');

request.onreadystatechange = function () {
 if (request.readyState === 4 && request.status === 200) {
    var resp = JSON.parse(request.response);
    console.log(resp);

    var docData = resp.response.docs;

    docData.forEach(function (el) {
      var details = document.createElement('ol');
      article.appendChild(details);

      var headline = document.createElement('li');
      headline.textContent = el.headline.main;
      details.appendChild(headline);

      var snippet = document.createElement('li');
      snippet.textContent = el.snippet;
      details.appendChild(snippet);

      var pubDate = document.createElement('li');
      pubDate.textContent = el.pub_date;
      details.appendChild(pubDate);

      var linkContainer = document.createElement('li');
      details.appendChild(linkContainer);
      var permalink = document.createElement('a');
      permalink.textContent = 'click for the article';
      permalink.setAttribute('href', el.web_url)
      linkContainer.appendChild(permalink);
    })
  }
}
