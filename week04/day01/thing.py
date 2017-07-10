class Thing:
    def __init__(self, name):
        self.name = name #within the class Thing, add name parameter to the name variable
        self.completed = False #within the class Thing, the variable completed is False

    def complete(self):
        self.completed = True #within the class Thing, the variable completed equals to True

    def __str__(self):
        return ("[x] " if self.completed else "[ ] ") + self.name # return the string 'x' if the variable "completed" is True???, else [ ]. + the name
