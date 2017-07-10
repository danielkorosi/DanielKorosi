from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()
x = 0
def line1(x):
    l = canvas.create_line(0,0, x, 300)
def line2(x):
    l = canvas.create_line(300, 300, 0, x)
def line3(x):
    l = canvas.create_line(0, 0, 300, x)
def line4(x):
    l = canvas.create_line(300, 300, x, 0)

for x in range(0, 300, 20):
    line1(x)
    line2(x)
    line3(x)
    line4(x)

root.mainloop()
