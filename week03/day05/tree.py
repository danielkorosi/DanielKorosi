from tkinter import *

root = Tk()

canvas = Canvas(root, width='600', height='600',)
canvas.pack()
def tree(x1, y1, x2, y2, z):
    canvas.create_line(x1, y1, x2, y2, fill = 'black' )
    if y2-z > 5:
        tree(x2, y2, x2, y2-z, z)
        tree(x2, y2, x2, y2+z, z)
        #tree(x2, y2, x1+turn, x2+turn, turn)
tree(300, 400, 300, 300, 4)
root.mainloop()
