from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

x1 = 10
y1 = 10
x2 = 20
y2 = 20

for i in range(19):
    squere = canvas.create_rectangle(x1, y1, x2, y2, fill = 'purple')
    x1 += 10
    y1 += 10
    x2 += 10
    y2 += 10
root.mainloop()
