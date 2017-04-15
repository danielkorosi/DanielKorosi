from tkinter import*
from PIL import Image, ImageTk
import random

root = Tk()
canvas = Canvas(root, width=720, height=720)
canvas.pack()

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
        [0, 0 , 0 , 1 , 0 , 0 , 0 , 0 , 0 , 0],
        [0, 0 , 0 , 1 , 0 , 0 , 0 , 0 , 0 , 0],
        [0, 1 , 1 , 1 , 0 , 0 , 0 , 0 , 0 , 0],
        [0, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],
        [1, 1 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],
        [0, 1 , 0 , 1 , 0 , 0 , 0 , 0 , 0 , 0],
        [0, 1 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],
        [0, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0],
        [0, 1 , 1 , 1 , 0 , 0 , 0 , 0 , 0 , 0],
        [0, 0 , 0 , 1 , 0 , 1 , 1 , 0 , 0 , 0]
        ]

        for y in range(len(self.map_template)):
            for x in range(len(self.map_template[y])):
                if self.map_template[y][x] == 1:
                    canvas.create_image(self.x + self.size * x, self.y + self.size * y, image = self.wall)
                if self.map_template[y][x] == 0:
                    canvas.create_image(self.x + self.size * x, self.y + self.size * y, image = self.floor)

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
        self.hero_x = 0
        self.hero_y = 0

    def draw_hero(self, x = 0, y = 0):
        self.hero_x = x
        self.hero_y = y
        self.hero = canvas.create_image(self.hero_x * self.size, self.hero_y * self.size, image = self.img_down, anchor = NW)

    def move_hero(self, x, y, graphics, map_template):
        if 0 <= x <= 9 and 0 <= y <= 9:
            if map_template[y][x] == 0:
                canvas.delete(self.hero)
                self.hero_x = x
                self.hero_y = y
                self.hero = canvas.create_image(self.hero_x * self.size, self.hero_y * self.size, image = graphics, anchor = NW)

class Skeleton():
    def __init__(self):
        self.size = 72
        self.img = Image.open('skeleton.png')
        self.skeleton_img = ImageTk.PhotoImage(self.img)
        self.skel_x = 0
        self.skel_y = 0

    def draw_skeleton(self, x, y):
        self.skel_x = x
        self.skel_y = y
        self.skeleton = canvas.create_image(self.skel_x * self.size, self.skel_y * self.size, image = self.skeleton_img, anchor = NW)

class Boss():
    def __init__(self):
        self.size = 72
        self.img = Image.open('boss.png')
        self.boss_img = ImageTk.PhotoImage(self.img)
        self.boss = 0

    def draw_boss(self, x, y):
        self.boss_x = x
        self.boss_y = y
        self.boss = canvas.create_image(self.boss_x * self.size, self.boss_y * self.size, image = self.boss_img, anchor = NW)

    def move_boss(self, x, y, map_template):
        if 0 <= x <= 9 and 0 <= y <= 9:
            if map_template[y][x] == 0:
                canvas.delete(self.boss)
                self.boss_x = x
                self.boss_y = y
                self.boss = canvas.create_image(self.boss_x * self.size, self.boss_y * self.size, image = self.boss_img, anchor = NW)

class GameLogic():
    def __init__(self):
        canvas.bind("<KeyPress>", self.on_key_press)
        self.m = Map()
        self.m.sketch_map()
        self.hero = Hero()
        self.hero.draw_hero()
        self.skeleton = Skeleton() # three skeleton objects to be created, for later use
        self.skeleton.draw_skeleton(8, 0)
        self.skeleton.draw_skeleton(4, 0)
        self.skeleton.draw_skeleton(4, 4)
        self.boss = Boss()
        self.boss.draw_boss(6,0)
        self.counter = 1

    def on_key_press(self, e):
        self.e = e
        randomizer = random.random()
        if self.counter % 2 == 0:
            if randomizer < 0.25:
                self.boss.move_boss(self.boss.boss_x, self.boss.boss_y+1, self.m.map_template)
            if 0.25 < randomizer < 0.5:
                self.boss.move_boss(self.boss.boss_x, self.boss.boss_y-1, self.m.map_template)
            if 0.5 <= randomizer < 0.75:
                self.boss.move_boss(self.boss.boss_x+1, self.boss.boss_y, self.m.map_template)
            if 0.75 <= randomizer:
                self.boss.move_boss(self.boss.boss_x-1, self.boss.boss_y, self.m.map_template)
        if e.keycode == 8320768:
            self.counter += 1
            self.hero.move_hero(self.hero.hero_x, self.hero.hero_y-1, self.hero.img_up, self.m.map_template)
        elif e.keycode == 8255233:
            self.counter += 1
            self.hero.move_hero(self.hero.hero_x, self.hero.hero_y+1, self.hero.img_down, self.m.map_template)
        elif e.keycode == 8189699:
            self.counter += 1
            self.hero.move_hero(self.hero.hero_x+1, self.hero.hero_y, self.hero.img_right, self.m.map_template)
        elif e.keycode == 8124162:
            self.counter += 1
            self.hero.move_hero(self.hero.hero_x-1, self.hero.hero_y, self.hero.img_left, self.m.map_template)

canvas.focus_set()
game = GameLogic()

root.mainloop()
