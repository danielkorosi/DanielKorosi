# - Create a variable named `p1`
#   with the following content: `[1, 2, 3]`
# - Create a variable named `p2`
#   with the following content: `[4, 5]`
# - Print if `p2` has more elements than `p1`

p1 = [1, 2, 3]
p2 = [4, 5]

def compare_length(a, b):
    if len(a) < len(b):
        print ("p2 has more elements")

compare_length(p1,p2)
