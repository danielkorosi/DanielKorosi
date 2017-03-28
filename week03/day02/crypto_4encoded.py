# Create a method that decrypts texts/encoded-lines.txt
def decrypt(file_name):
    dcr = open(file_name, 'r')
    text = dcr.read()
    int_version = ''
    for i in text:
        if i == ' ':
            int_version += i
        elif i == '\n':
            int_version += '\n'
        else:
            i = ord(i)-1
            i = chr(i)
            int_version += i
    return int_version

print(decrypt('encoded-lines.txt'))
