from tkinter import*
from PIL import Image, ImageTk

root = Tk()
canvas = Canvas(root, width=720, height=720)
#image1 = Image.open('floor.png')
#floor = ImageTk.PhotoImage(image1)
#canvas.bind("<KeyPress>", move_hero)
#canvas.pack()
class Map():
    def __init__(self):
        self.x = 36
        self.y = 36
        self.size = 72
        self.img1 = Image.open('floor.png')
        self.floor = ImageTk.PhotoImage(self.img1)
        self.img2 = Image.open('wall.png')
        self.wall = ImageTk.PhotoImage(self.img2)

    def sketch_map(self):
        self.map_template = [
        [0, 0 , 0 , 1 , 0 , 1 , 0 , 0 , 0 , 0],
        [0, 0 , 0 , 1 , 0 , 1 , 0 , 0 , 0 , 0],
        [0, 1 , 1 , 1 , 0 , 1 , 0 , 1 , 1 , 0],
        [0, 0 , 0 , 0 , 0 , 1 , 0 , 0 , 0 , 0],
        [1, 1 , 0 , 0 , 0 , 1 , 0 , 0 , 1 , 0],
        [0, 1 , 0 , 1 , 0 , 0 , 0 , 0 , 1 , 0],
        [0, 1 , 0 , 0 , 0 , 0 , 0 , 0 , 1 , 0],
        [0, 0 , 0 , 0 , 0 , 1 , 1 , 0 , 1 , 0],
        [0, 1 , 1 , 1 , 0 , 0 , 0 , 0 , 1 , 0],
        [0, 0 , 0 , 1 , 0 , 1 , 1 , 0 , 0 , 0]
        ]

        for j in range(len(self.map_template)):
            for i in range(len(self.map_template[j])):
                if self.map_template[j][i] == 1:
                    canvas.create_image(self.x+self.size*j, self.y+self.size*i, image = self.wall)
                if self.map_template[j][i] == 0:
                    canvas.create_image(self.x+self.size*j, self.y+self.size*i, image = self.floor)

class Hero():
    def __init__(self):
        self.size = 72
        self.down = Image.open('hero-down.png')
        self.img_down = ImageTk.PhotoImage(self.down)
        self.up = Image.open('hero-up.png')
        self.img_up = ImageTk.PhotoImage(self.up)
        self.right = Image.open('hero-right.png')
        self.img_right = ImageTk.PhotoImage(self.right)
        self.left = Image.open('hero-left.png')
        self.img_left = ImageTk.PhotoImage(self.left)
        self.hero = 0 #but whyyyy

    def draw_hero(self, x = 0, y = 0):
        self.char_x = x
        self.char_y = y
        self.hero = canvas.create_image(self.char_x * self.size, self.char_y * self.size, image = self.img_down, anchor = NW)

    def move_hero(self, x, y, graphics):
        if 0 <= x <= 9 or 0 <= y <= 9:
            if m.map_template[j][i] == 0:
                canvas.delete(self.hero)
                self.char_x = x
                self.char_y = y
                self.hero = canvas.create_image(self.char_x * self.size, self.char_y * self.size, image = graphics, anchor = NW)

m = Map()
m.sketch_map()
hero = Hero()
hero.draw_hero()

def on_key_press(e):
    print(hero.char_x)
    print(hero.char_y)

    if e.keycode == 8320768:
        hero.move_hero(hero.char_x, hero.char_y-1, hero.img_up)
    elif e.keycode == 8255233:
        hero.move_hero(hero.char_x, hero.char_y+1, hero.img_down)
    elif e.keycode == 8189699:
        hero.move_hero(hero.char_x+1, hero.char_y, hero.img_right)
    elif e.keycode == 8124162:
        hero.move_hero(hero.char_x-1, hero.char_y, hero.img_left)

canvas.bind("<KeyPress>", on_key_press)
canvas.focus_set()

canvas.pack()

root.mainloop()
