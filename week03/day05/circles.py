from tkinter import *

root = Tk()

canvas = Canvas(root, width='600', height='600',)
canvas.pack()

z = (3**0.5)/2
def circles(x1, y1, size):
    canvas.create_oval(x1, y1, x1+size, y1+size)

    if size >10:
        circles(x1 ,y1+size/2, size/2)
        circles(x1+size/2.5 , y1+size*z/3, size/2)
        #circles(x1-size/2.5 , y1+size*z/3, size/2)

circles(20, 20, 300)

root.mainloop()
