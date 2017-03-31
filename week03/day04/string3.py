# Given a string, compute recursively a new string where all the
# adjacent chars are now separated by a "*".
def separate(string):
    if string == '':
        return ''
    else:
        return string[0] + '*' + separate(string[1:])
print(separate('xdxdxdxxnexnsxasxfd'))
