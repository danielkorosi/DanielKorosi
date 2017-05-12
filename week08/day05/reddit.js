'use strict';

var body = document.querySelector('body');
var entirePost = document.createElement('article');
body.appendChild(entirePost);
entirePost.className = 'post';

var rank = document.createElement('div');
rank.className = 'rank';
entirePost.appendChild(rank);


var voting = document.createElement('div');
voting.className = 'voting';
entirePost.appendChild(voting);

var upVote = document.createElement('img');
upVote.className = 'up-vote';
voting.appendChild(upVote);

var voteNumber = document.createElement('div');
voteNumber.className = 'vote-number';
voting.appendChild(voteNumber);

var upVote = document.createElement('img');
upVote.className = 'up-vote';
voting.appendChild(upVote);


var mainInfo = document.createElement('main');
mainInfo.className = 'main-info';
entirePost.appendChild(mainInfo);

var title = document.createElement('div');
title.className = 'title';
mainInfo.appendChild(title);


var details = document.createElement('div');
details.className = 'details';
mainInfo.appendChild(details);

var time = document.createElement('div');
time.className = 'time';
details.appendChild(time);

var author = document.createElement('div');
author.className = 'author';
details.appendChild(author);



var edit = document.createElement('div');
edit.className = 'edit';
mainInfo.appendChild(edit);

var modify = document.createElement('div');
modify.className = 'modify';
edit.appendChild(modify);

var remove = document.createElement('div');
remove.className = 'remove';
edit.appendChild(remove);
