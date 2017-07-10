
from tkinter import *
import time
root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a line from that point to the center of the canvas.
# fill the canvas with lines from the edges, every 20 px, to the center.

def centerline(x, y):
    line = canvas.create_line(x, y, 150, 150)
    time.sleep(0.5)
    canvas.update()
for i in range(0, 301, 20):
    for j in range(0, 2, 1):
        centerline(i, j*300)
        centerline(j*300, i)
root.mainloop()
