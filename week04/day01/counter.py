class Counter:

    def __init__(self, value=0):
        self.value = int(value)
        self.reset_value = int(value)

    def add(self, number = 1):
        self.value += number

    def get(self):
        return self.value

    def reset(self):
        self.value = self.reset_value



n1 = Counter(4)
n1.add()
print(n1.value)
#n1.get()
#print(n1.value)
n1.reset()
print(n1.value)
