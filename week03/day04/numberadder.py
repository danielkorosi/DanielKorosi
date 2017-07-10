# Write a recursive function that takes one parameter: n and adds numbers from 1 to n

def add(n):
    if n == 1:
        return n
    else:
        return n + add(n-1)
print(add(4))
