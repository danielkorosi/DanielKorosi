# Given a string, compute recursively a new string where all the 'x' chars have been removed.
def remove_x(string):
    if string == '':
        return ''
    else:
        if string[0] != 'x':
            return string[0] + remove_x(string[1:])
        else:
            return '' + remove_x(string[1:])
print(remove_x('xdxdxdxxnexnsxasxfd'))
