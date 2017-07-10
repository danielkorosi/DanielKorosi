class Apples():
    def get_apple(self):
        return 'apple'

class Sum():
    def sum (self, list=[]):
        self.list = list
        sum_of_numbers = 0
        for i in self.list:
            sum_of_numbers +=  i
        return sum_of_numbers

class Anagram():
    def anagram(self, word1, word2):
        self.word1 = word1
        self.word2 = word2
        self.list_word1 = list(sorted(self.word1))
        self.list_word2 = list(sorted(self.word2))
        for i in range (len(self.list_word1)):
            if self.list_word1[i]==self.list_word2[i]:
                match = True
            else:
                match = False
        return match



class CountLetters():
    def count(self, word):
        self.word = word
        word_list = list(self.word)
        dictionary = {}
        for i in word_list:
            if i in dictionary:
                dictionary[i] += 1
            else:
                dictionary[i] = 1
        return dictionary


class Fibonacci():
    def fibonacci(self, n):
        self.n = n
        if self.n < 2:
            return self.n
        else:
            return self.fibonacci(n-1) + self.fibonacci(n-2)


class Sharpie():
    def __init__(self, color, width):
        self.color = color
        self.width = width
        self.ink_amount = 100
    def use(self):
        self.ink_amount -= 10
        return self.ink_amount

class Animal():
    def __init__(self):
        self.hunger = 50
        self.thirst = 50

    def eat(self):
        self.hunger -= 1

    def drink(self):
        self.thirst -= 1

    def play(self):
        self.hunger += 1
        self.thirst += 1
