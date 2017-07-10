class PostIt:
    backgroundColor = ''
    text = ''
    textColor = ''

post1 = PostIt()
post2 = PostIt()
post3 = PostIt()

post1.backgroundColor = 'orange'
post1.text = "Idea 1"
post1.textColor = 'blue'
post2.backgroundColor = 'pink'
post2.text = "Awesome"
post2.textColor = 'black'
post3.backgroundColor = 'yellow'
post3.text = "Superb!"
post3.textColor = 'green'

print('The background color of the first post is: ' + post1.backgroundColor + ', its text is ' + post1.text+ ' and the colour of the text is ' + post1.textColor)
