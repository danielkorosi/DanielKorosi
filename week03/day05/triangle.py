from tkinter import *

root = Tk()

canvas = Canvas(root, width='600', height='600',)
canvas.pack()

def triangle(x, y, edge):
    canvas.create_polygon(x, y, x+edge/2, y+edge, x-edge/2, y+edge, fill='', outline = 'black')

    if edge > 10:
        triangle(x-edge/2, y, edge/2)
        triangle(x+edge/2, y, edge/2)
        triangle(x, y+edge, edge/2)

triangle(300, 10, 200)
root.mainloop()
