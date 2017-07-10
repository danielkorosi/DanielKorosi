listOfNumbers = [2, 4, 6, 8, 10, 12, 14, 16]

def find(x):
    a = 0
    for i in range(len(listOfNumbers)):
        if i == 4 or i == 8 or i == 12 or i == 16:
            a += 1
    if a >= 4:
        return True
    else:
        return False
print(find(listOfNumbers))
