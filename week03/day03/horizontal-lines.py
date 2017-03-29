from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a 50 long horizontal line from that point.
# draw 3 lines with that function.

def drawline(x, y):
    line = canvas.create_line(x, y, x+50, y, fill = 'red')
    return line

drawline(10, 30)
drawline(100, 180)
drawline(30, 270)

root.mainloop()
