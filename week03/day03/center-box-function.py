from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a square drawing function that takes 1 parameter:
# the square size
# and draws a square of that size to the center of the canvas.
# draw 3 squares with that function.

cx = 150
cy = 150
def drawsquere(size):
    squere = canvas.create_rectangle(cx-size/2, cy-size/2, cx+size/2, cy+size/2)

drawsquere(20)
drawsquere(40)
drawsquere(60)

root.mainloop()
