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
                self.floors = canvas.create_image(36+72*x, 36+72*y, image=self.floor)

        self.walls = [[3, 5], [3,5,7,8], [1,2,3,5,7,8], [5], [0,1,2,3,5,7,8], [1,3,8], [1,3,5,6,8], [5,6,8], [1,2,3,8], [3,5,6,8]]

        for i in range(len(self.walls)):
            for j in self.walls[i]:
                canvas.create_image(36+72*j, 36+72*i, image=self.wall)

tile = Tile()
tile.map()
root.mainloop()
