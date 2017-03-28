# create a function that takes a number,
# divides ten with it,
# and prints the result.
# it should print "fail" if the parameter is 0
print("Add a number to divide it by 10:")
number = int(input())
def divide(number):
    try:
        res = 10/number
        return (res)
    except ZeroDivisionError:
        return ('fail')
print(divide(number))
