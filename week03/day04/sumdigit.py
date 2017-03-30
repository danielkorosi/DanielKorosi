# Given a non-negative int n, return the sum of its digits recursively (no loops).
# Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while
# floor divide (//) by 10 removes the rightmost digit (126 / 10 is 12).

def sumdigit(n):
    if n > 0:
        return (n % 10) + sumdigit(n // 10)
    else:
        return n

print(sumdigit(2457))
