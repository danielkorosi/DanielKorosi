from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a line from that point to the center of the canvas.
# draw 3 lines with that function.

def drawline(x, y):
    line = canvas.create_line(x, y, 150, 150, fill = 'red')
    return line

drawline(10, 30)
drawline(250, 150)
drawline(40, 280)

root.mainloop()
