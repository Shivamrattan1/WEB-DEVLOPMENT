a=[]
k=10
t=-1
b=-1
while True:
    print(" press 1 for insert \n press 2 for delete \n press 3 for display \npress 4 for  exit \n input your choice")
    x=int(input())
    if(x==1):
        if(len(a)==k):
            print("stack overflow ")
            continue
        print("input element")
        c=int(input())
        t=t+1
        a.append(c)
        if(b==-1):
             b=b+1
    elif(x==2):
        if(t==-1):
            print("stack underflow ")
            continue
        if(t==b):
            a.pop(b)
            b=-1
            t=-1
            continue
        b=b+1
        print(b,a)
    elif(x==3):
            if(t==-1):
                print("stack underflow ")
                continue
            print(b)
            for i in range(b,t+1):
                print(a[i],end=" ")
            print("\n")
    elif(x==4):
         exit