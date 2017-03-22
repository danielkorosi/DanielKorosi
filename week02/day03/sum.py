# - Write a function called `sum` that sum all the numbers
#   until the given parameter

def sum(number_list, p):
    the_result = 0
    for n in number_list:
        the_result += n
        if the_result > p:
            break
        print(the_result)

sum([10,20,30,40,50,60,70,80],200)

# the function sums up the list numbers until the amount is lower than 200
