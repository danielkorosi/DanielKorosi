# Write a program that reads a number from the standard input, then draws a
# pyramid like this:
#
#
#    *
#   ***
#  *****
# *******
#
# The pyramid should have as many lines as the number was

print("add a number:")
x = int(input())
for i in range(x)  :
    i = ((x-i) * " " + (i * "*") * 2 + "* ")
    print(i)
