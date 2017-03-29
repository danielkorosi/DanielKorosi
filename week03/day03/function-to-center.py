from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a line from that point to the center of the canvas.
# fill the canvas with lines from the edges, every 20 px, to the center.

def centerline(x, y):
        line = canvas.create_line(x, y, 150, 150)

for i in range(0, 301, 20):
    for j in range(0, 301, 300):
        centerline(i, j)
        centerline(j, i)
root.mainloop()
