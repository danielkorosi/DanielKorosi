# Saturn is missing from the planetList
# Insert it into the correct position

planetList = ["Mercury","Venus","Earth","Mars","Jupiter","Uranus","Neptune"]

planetList.append(planetList[6])
planetList[6] = planetList[5]
planetList[5] = "Saturn"

print(planetList)

#a step-by-step solution
