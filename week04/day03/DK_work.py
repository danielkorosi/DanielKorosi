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
