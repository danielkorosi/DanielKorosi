class Garden():
    def __init__(self):
        self.flowers = []
        self.trees = []

    def watering(self):

class Flower(Garden):
    def __init__(self, color, water_amount = 0):
        self.color = color
        self.water_amount = water_amount
        self.flowers.append([self.color, self.water_amount])

class Trees(Garden):
    def __init__(self, color, water_amount = 0):
        self.color = color
        self.water_amount = water_amount
        self.trees.append([self.color, self.water_amount])
