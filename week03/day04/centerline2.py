import time
from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

def centerline(x, y):
    line = canvas.create_line(x, y, 150, 150)
    time.sleep(0.5)
    canvas.update()
for i in range(0, 301, 20):
    centerline(i, 0)
    centerline(300, i)
    centerline(i, 300)
    centerline(0, i)

root.mainloop()
