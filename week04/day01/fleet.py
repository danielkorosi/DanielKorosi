from thing import Thing

class Fleet(object):
    def __init__(self):
        self.things = [] #inside the Fleet class, create list into the variable things

    def add(self, thing):
        self.things.append(thing) # within the Fleet class, append the parameter thing parameter to the things

    def __str__(self):
        result = ""
        for i in range(0, len(self.things)):
            result += str(i+1) + ". " + self.things[i].__str__() + "\n"
        return result
