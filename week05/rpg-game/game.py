from tkinter import*
from PIL import Image, ImageTk

root = Tk()
canvas = Canvas(root, width=720, height=720)
#image1 = Image.open('floor.png')
#floor = ImageTk.PhotoImage(image1)
canvas.pack()

class Tile():
    def __init__(self):
        self.img1 = Image.open('floor.png')
        self.floor = ImageTk.PhotoImage(self.img1)
        self.img2 = Image.open('wall.png')
        self.wall = ImageTk.PhotoImage(self.img2)

    def map(self):
        for x in range(10):
            for y in range(10):
                self.floors = canvas.create_image(36 + 72 * x, 36 + 72 * y, image=self.floor)

tile = Tile()
tile.map()
root.mainloop()
