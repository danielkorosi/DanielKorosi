from tkinter import *

root = Tk()

canvas = Canvas(root, width='600', height='600',)
canvas.pack()
def hexagon(x1, y1, size):
    canvas.create_polygon(x1, y1, x1+size/4, y1-size/2, x1+size*3/4, y1-size/2, x1+size, y1, x1+size*3/4, y1+size/2, x1+size/4, y1+size/2, fill='', outline = 'black')

    if size > 40:
        hexagon(x1+size/8, y1-size/4, size/2)
        hexagon(x1+size/2, y1, size/2)
        hexagon(x1+size/8, y1+size/4, size/2)

hexagon(20, 250, 400)
root.mainloop()
