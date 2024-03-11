
list=["a","f","v","e","l","h"]
list2=[1,2,3,4,5,6]
print(list)
print(list2)
print(list[0])
print(list[-1])
for i in range(1,3,1):
    print(list[i])
list2.append(66)
print(list2)
list.extend(list2)
print(list)
list.pop(4)
print(list)
list.remove(4)
print(list)
del list[:]
print(list)
list3=[50,67,89]
