#Petrol Station

#Create Station and Car classes
#Station
#gas_amount
#refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gas_amount
#Car
#gas_amount
#capacity
#create constructor for Car where:
#initialize gas_amount -> 0
#initialize capacity -> 100
class Station():
    def __init__(self, gas_amount):
        self.gas_amount = gas_amount

    def refill(self, car):
        vw.gas_amount += vw.capacity
        self.gas_amount -= vw.capacity
        return self.gas_amount, vw.gas_amount

class Car():
    def __init__ (self, gas_amount = 0, capacity = 100):
        self.gas_amount = gas_amount
        self.capacity = capacity

vw = Car()
shell = Station(1000)
print(shell.refill(vw))
