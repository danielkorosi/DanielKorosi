# write a function that takes a filename and returns the number of lines the
# file contains. It should return zero if the file does not exist.
print('Add the name of your file to count the number of lines in it:')
file_name = input()
def line_number(file_name):
    try:
        opened_file = open(file_name, 'r')
        textlines = opened_file.readlines()
        x = len(textlines)
        return x
    except FileNotFoundError:
        return 0
print(line_number(file_name))
