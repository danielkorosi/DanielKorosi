# Create a method that decrypts texts/reversed_zen_order.txt
def decrypt(file_name):
    dcr = open(file_name, 'r')
    text = dcr.readlines()
    text = text[::-1]
    reversed_order = ''
    reversed_order = reversed_order.join(text)
    return(reversed_order)
    dcr.close()

print(decrypt('reversed-order.txt'))
