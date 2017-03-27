# Join the two lists by matching one girl with one boy in the order list
# Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

girls = ["Eve","Ashley","Bozsi","Kat","Jane"]
boys = ["Joe","Fred","Bela","Todd","Neef","Jeff"]
order = []


for i in range(len(girls)):
    order += [girls[i]]+ [boys[i]]

print(order)
