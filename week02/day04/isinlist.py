# Check if list contains all of the following elements: 4,8,12,16
# Create a function that accepts listOfNumbers as an input
# it should return "true" if it contains all, otherwise print "false"

listOfNumbers = [2, 4, 6, 8, 10, 12, 14, 16]

def find(x):
    a = 0
    for i in x:
        if i == 4 or i == 8 or i == 12 or i == 16:
            a += 1
    if a >= 4:
        return True
    else:
        return False
print(find(listOfNumbers))
