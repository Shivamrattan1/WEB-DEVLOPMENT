f=open("shk.txt","w")
while(1):
    x=int(input())
    f.write(str(x))
    print("1 continue 0 break")
    f.write(str(0))
    y=int(input())
    if(y==0):
        break
f.close()
f=open("shk.txt","r")
s=0
while(1):
    x=f.read(1)
    if not x:
        break
    y=int(ord(x)-48)
    if(y!=0):
        s=s*10 + y
    else:
        print(s)
        s=0

  

    