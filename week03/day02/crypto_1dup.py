# Create a method that decrypts the texts/duplicated_chars.txt

def decrypt(file_name):
    dcr = open(file_name, 'r')
    text = dcr.read()
    text = text[::2]
    print(text)
    dcr.close()

decrypt('duplicated-chars.txt')
