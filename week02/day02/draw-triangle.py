# Write a program that reads a number from the standard input, then draws a
# triangle like this:
#
# *
# **
# ***
# ****
#
# The triangle should have as many lines as the number was
print("add a number:")
x = int(input())
for i in range(1, x+1):
    i=i*"*"
    print(i)
