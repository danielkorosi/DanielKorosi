students = [
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Zsombor', 'age': 12, 'candies': 5}
]

# create a function that takes a list of students and prints:
# - Who has got more candies than 4 candies
def many_candies(x):
    for i in x:
        if i["candies"] > 4:
            return i["name"]
print(many_candies(students))

# create a function that takes a list of students and prints:
#  - how many candies they have on average
def average(x):
    candies = 0
    for i in x:
        candies += i["candies"]
    candies /= len(x)
    return candies
print(average(students))
