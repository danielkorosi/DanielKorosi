from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# draw four different size and color rectangles.
rectangle1 = canvas.create_rectangle(10, 20, 50, 50, fill = 'green')
rectangle2 = canvas.create_rectangle(100, 20, 200, 50, fill = 'red')
rectangle3 = canvas.create_rectangle(10, 100, 100, 280, fill = 'blue')
rectangle4 = canvas.create_rectangle(145, 145, 300, 300, fill = 'yellow')
root.mainloop()
