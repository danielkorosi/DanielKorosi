def search_palindrome(string):
    for i in range(len(string)):
        if string[:i] == string[:i:-1]:
            return string
        else:
            return ("[]")
print(search_palindrome("agaragar sdklfjh gorog"))
