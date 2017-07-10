from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a square drawing function that takes 2 parameters:
# the square size, and the fill color,
# and draws a square of that size and color to the center of the canvas.
# create a loop that fills the canvas with rainbow colored squares.


color = ["red", "orange", "yellow", "green", "blue", "purple", "violet"]
i = 0
def rainbow(size, color):
    squere = canvas.create_rectangle(150-size/2, 150-size/2, 150+size/2, 150+size/2, fill = color)

for s in range(300, 0, -20):
    rainbow(s, color[i])
    if i < 6:
        i += 1
    else:
        i = 0

root.mainloop()
