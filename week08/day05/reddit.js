'use strict';

function getData(callback) {
  var request = new XMLHttpRequest();

  request.open('GET', 'http://10.27.99.171:8080/posts', true);
  request.setRequestHeader('Accept', 'application/json')
  request.send();

  request.onreadystatechange = function () {
   if (request.readyState === 4 && request.status === 200) {
      var resp = JSON.parse(request.response);
      //console.log(resp);

      var docData = resp.posts;
      callback(docData)
    }
  }
}

function createPost(docData) {
  docData.forEach(function(el) {
    var body = document.querySelector('body');
    var entirePost = document.createElement('article');
    body.appendChild(entirePost);
    entirePost.className = 'post';

    var rank = document.createElement('div');
    rank.className = 'rank';
    rank.innerHTML = el.id;
    entirePost.appendChild(rank);


    var voting = document.createElement('div');
    voting.className = 'voting';
    entirePost.appendChild(voting);

    var upVote = document.createElement('img');
    upVote.className = 'up-vote';
    upVote.setAttribute('src', 'upvote.png')
    voting.appendChild(upVote);

    var voteNumber = document.createElement('div');
    voteNumber.className = 'vote-number';
    voteNumber.innerHTML = el.score;
    voting.appendChild(voteNumber);

    var downVote = document.createElement('img');
    downVote.className = 'down-vote';
    downVote.setAttribute('src', 'downvote.png')
    voting.appendChild(downVote);


    var mainInfo = document.createElement('main');
    mainInfo.className = 'main-info';
    entirePost.appendChild(mainInfo);

    var title = document.createElement('div');
    title.className = 'title';
    title.innerHTML = el.title;
    mainInfo.appendChild(title);


    var details = document.createElement('div');
    details.className = 'details';
    mainInfo.appendChild(details);

    var time = document.createElement('div');
    time.className = 'time';
    time.innerHTML = 'here goes the time';
    details.appendChild(time);

    var author = document.createElement('div');
    author.className = 'author';
    author.innerHTML = 'here goes the author name'
    details.appendChild(author);


    var edit = document.createElement('div');
    edit.className = 'edit';
    mainInfo.appendChild(edit);

    var modify = document.createElement('button');
    modify.className = 'modify';
    modify.innerHTML = 'modify';
    edit.appendChild(modify);

    var remove = document.createElement('button');
    remove.className = 'remove';
    remove.innerHTML = 'remove';
    edit.appendChild(remove);

  })
}

getData(createPost);
