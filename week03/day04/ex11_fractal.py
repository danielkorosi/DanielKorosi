from tkinter import *

root = Tk()

canvas = Canvas(root, width='600', height='600')
canvas.pack()

def rec_squere(x1, y1, size):
    canvas.create_rectangle(x1, y1, x1+size, y1+size, fill= 'yellow')

    if size > 5:
        rec_squere(x1+size*1/3, y1, size/3)
        rec_squere(x1, y1+size*1/3, size/3)
        rec_squere(x1+size*2/3, y1+size*1/3, size/3)
        rec_squere(x1+size*1/3, y1+size*2/3, size/3)

rec_squere(10, 10, 500)
root.mainloop()
