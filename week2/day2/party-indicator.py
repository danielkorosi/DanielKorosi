# Write a program that asks for two numbers
# Thw first number represents the number of girls that comes to a party, the
# second the boys
# It should print: The party is exellent!
# If the the number of girls and boys are equal and there are more people coming than 20
#
# It should print: Quite cool party!
# It there are more than 20 people coming but the girl - boy ratio is not 1-1
#
# It should print: Average party...
# If there are less people coming than 20
#
# It should print: Sausage party
# If no girls are coming, regardless the count of the people

print ("Add the number of girls")
g = int(input())
print ("Add the number of boys")
b = int(input())

if g==b and g+b>20 and g!=0:
    print ("The party is exellent!")
if g+b>20 and g!=b and g!=0:
    print ("Quite cool party!")
if g+b<20 and g!=0:
    print ("Average party...")
if g==0:
    print ("Sausage party")
