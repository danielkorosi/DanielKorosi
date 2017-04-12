from tkinter import*
from PIL import Image, ImageTk

root = Tk()
canvas = Canvas(root, width=720, height=720)
#image1 = Image.open('floor.png')
#floor = ImageTk.PhotoImage(image1)
#canvas.bind("<KeyPress>", move_hero)
#canvas.pack()
class Tile():
    def __init__(self):
        self.x = 36
        self.y = 36
        self.size = 72
        self.img1 = Image.open('floor.png')
        self.floor = ImageTk.PhotoImage(self.img1)
        self.img2 = Image.open('wall.png')
        self.wall = ImageTk.PhotoImage(self.img2)

    def map(self):
        for x in range(10):
            for y in range(10):
                self.floors = canvas.create_image(self.x+self.size*x, self.y+self.size*y, image=self.floor)

        self.walls = [[3, 5], [3,5,7,8], [1,2,3,5,7,8], [5], [0,1,2,3,5,7,8], [1,3,8], [1,3,5,6,8], [5,6,8], [1,2,3,8], [3,5,6,8]]

        for i in range(len(self.walls)):
            for j in self.walls[i]:
                canvas.create_image(self.x+self.size*j, self.y+self.size*i, image=self.wall)
class Hero():
    def __init__(self):
        self.x = 36
        self.y = 36
        self.down = Image.open('hero-down.png')
        self.img_down = ImageTk.PhotoImage(self.down)
        self.up = Image.open('hero-up.png')
        self.img_up = ImageTk.PhotoImage(self.up)
        self.right = Image.open('hero-right.png')
        self.img_right = ImageTk.PhotoImage(self.right)
        self.left = Image.open('hero-left.png')
        self.img_left = ImageTk.PhotoImage(self.left)


    def draw_hero(self):
        canvas.create_image(self.x, self.y, image=self.img_down)

    def move_hero(self, e):
        if e.keycode == 8320768:
            hero.y = hero.y - 72
        elif e.keycode == 8255233:
            hero.y = hero.y + 72
        elif e.keycode == 8189699:
            hero.x = hero.x + 72
        elif e.keycode == 8124162:
            hero.x = hero.x - 72
        hero.draw()

canvas.bind("<KeyPress>", move_hero)
canvas.pack()
canvas.focus_set()
tile = Tile()
tile.map()
hero = Hero()
hero.draw_hero()

root.mainloop()
