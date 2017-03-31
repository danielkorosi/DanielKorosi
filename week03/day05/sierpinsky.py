from tkinter import *

root = Tk()

canvas = Canvas(root, width='600', height='600',)
canvas.pack()

def carpet(x1, y1, size):
    canvas.create_rectangle(x1, y1, x1+size, y1+size, fill = 'black')

    if size > 5:
        carpet(x1-size*2/3, y1-size*2/3, size/3)
        carpet(x1+size/3, y1-size*2/3, size/3)
        carpet(x1+size*4/3, y1-size*2/3, size/3)
        carpet(x1+size*4/3, y1+size/3, size/3)
        carpet(x1+size*4/3, y1+size*4/3, size/3)
        carpet(x1+size/3, y1+size*4/3, size/3)
        carpet(x1-size*2/3, y1+size*4/3, size/3)
        carpet(x1-size*2/3, y1+size/3, size/3)


carpet(200, 200, 200)
root.mainloop()
