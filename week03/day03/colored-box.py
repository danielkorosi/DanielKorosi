from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# draw a box that has different colored lines on each edge.
red_line = canvas.create_line(10, 10, 200, 10, fill = 'red')
green_line = canvas.create_line(200, 10, 200, 180, fill = 'green')
yellow_line = canvas.create_line(200, 180, 10, 180, fill = 'yellow')
blue_line = canvas.create_line(10, 180, 10, 10, fill = 'blue')
root.mainloop()
