# - Create a variable named `abc`
#   with the following content: `["first", "second", "third"]`
# - Swap the first and the third element of `abc`


#my_list[indexOfPwd2],my_list[indexOfPwd2+1] = #my_list[indexOfPwd2+1],my_list[indexOfPwd2
abc = ["first", "second", "third"]
abc[0], abc[2] = abc[2], abc[0]
print(abc)
