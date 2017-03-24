#Create a function named is anagram following your current language's style guide. It should take two strings and return a boolean value depending on whether its an anagram or not.

print("Add two words of the same length:")
input_1 = input()
input_2 = input()

def anagram(input_1,input_2):
    input_1_list = list(input_1)
    input_2_list = list(input_2)
    input_1_list.sort()
    input_2_list.sort()

    z = 0
    for i in input_1_list:
        if input_1_list[z]==input_2_list[z]:
            match = True
            z = z + 1    
        else:
            match = False
    return match
print(anagram(input_1,input_2))
