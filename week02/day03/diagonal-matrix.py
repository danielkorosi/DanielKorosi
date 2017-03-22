# - Create (dynamically) a two dimensional list
#   with the following matrix. Use a loop!
#
#   1 0 0 0
#   0 1 0 0
#   0 0 1 0
#   0 0 0 1
#
# - Print this two dimensional list to the output

x = 4
matrix = [[ 0 for i in range(x)] for j in range(x)]
for i in range(4):
    for j in range(4):
        if i == j:
            matrix[i][j] = 1
for i in matrix:
    print(i)

#matrix[0][0]=1
