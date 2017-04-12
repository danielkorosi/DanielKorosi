from tkinter import*
from PIL import Image, ImageTk

class Objects():
    def __init__(self, background=''):
        self.background = background
    def draw_object(self, x, y):
        self.opened_image = Image.open(self.background)
        self.image = ImageTk.PhotoImage(self.opened_image)
        canvas.create_image(x, y, image = self.image)

class Wall(Objects):
    def __init__(self, background = 'wall.png'):
        super().__init__(background)

class Floor(Objects):
    def __init__(self, background = 'floor.png'):
        super().__init__(background)

class Map():
    def __init__(self):
        root = Tk()
        canvas = Canvas(root, width=720, height=720)
        canvas.pack()
        root.mainloop()
        self.floor = Floor()
        self.wall = Wall()
        self.sketch_map()
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
        return self.map_template

    def draw_map(self):
        for y in range(len(self.map_template)):
            for x in range(len(self.map_template[y])):
                if self.map_template[x][y] == 1:
                    self.wall.draw_object(y*72,x*72)
                if self.map_template[x][y] == 0:
                    self.floor.draw_object(x*72,y*72)
#class Hero(Objects):
    #super().__init__(background):
    #    self.x = 0
    #    self.y = 0
    #    self.create_object(self.x,self.y)

map = Map()
map.draw_map()
