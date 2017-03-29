from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

# fill the canvas with a checkerboard pattern.
x1 = 0
y1 = 0

#for lines in range(30):
    #if lines % 2 == 0:
for lines in range(30):
    x1 = 0
    if lines % 2 == 0:
        for i_in_line in range(30):
            if i_in_line % 2 == 0:
                squere = canvas.create_rectangle(x1, y1, x1+10, y1+10, fill='white')
                x1 +=10
            else:
                squere = canvas.create_rectangle(x1, y1, x1+10, y1+10, fill='black')
                x1 += 10
    else:
        for i_in_line in range(30):
            if i_in_line % 2 == 0:
                squere = canvas.create_rectangle(x1, y1, x1+10, y1+10, fill='black')
                x1 +=10
            else:
                squere = canvas.create_rectangle(x1, y1, x1+10, y1+10, fill='white')
                x1 += 10
    y1 += 10
root.mainloop()
