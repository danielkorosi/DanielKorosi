# Given a string, compute recursively (no loops) a new string where all the
# lowercase 'x' chars have been changed to 'y' chars.
def x_to_y(string):
    if string == '':
        return ''
    else:
        if string[0] != 'x':
            return string[0] + x_to_y(string[1:])
        else:
            return 'y' + x_to_y(string[1:])

print(x_to_y('artxdxdxdxd'))
