# Given base and n that are both 1 or more, compute recursively (no loops)
# the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

def power(b, n):
    if b > 0 and n > 0:
        return b * power(b, n-1)
    elif n  == 0:
        return 1

print(power(3, 4))
