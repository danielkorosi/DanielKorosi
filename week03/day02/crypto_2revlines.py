# Create a method that decrypts texts/reversed_zen_lines.txt
def decrypt(file_name):
    dcr = open(file_name, 'r')
    text = dcr.readlines()
    reversed_by_line = ''
    for i in text:
        i = i[::-1]
        reversed_by_line += i
    return reversed_by_line
    dcr.close()
print(decrypt('reversed-lines.txt'))
