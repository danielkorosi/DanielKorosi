# - Create a function called `factorio`
#   that returns it's input's factorial

def factorio(x):
    result = 1
    while x>=1:
        result = result * x
        x = x-1
    print(result)

factorio(4)
