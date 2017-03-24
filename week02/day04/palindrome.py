#Create a function named create palindrome following your current language's style guide. It should take a string, create a palindrome from it and then return it.
#print("Write any word below to get a palindrome from it:")

print("I know you want a palindrome:")
x = input()
def create_palindrome(x):
   x = x + x[::-1]
   return x
print(create_palindrome(x))
