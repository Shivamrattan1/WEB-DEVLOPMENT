s1 = "aabcc"
s2 = "dbbca"
s3 = "aadbbcbcac"
i=0
j=0
k=0
if((len(s1)+len(s2))!=len(s3)):
    print(False) 
while(i<len(s3)):
            if(j<len(s1)):
                if(s1[j]==s3[i]):
                    print("i=",i,"j=",j,"s3=",s3[i],"s1=",s1[j])
                    cc=1
                    while(j<len(s1)-1):
                        j=j+1
                        i=i+1
                        if(s3[i]!=s1[j]):
                            break
                        print("i=",i,"j=",j,"s3=",s3[i],"s1=",s1[j])
            if(k<len(s2) and cc==0):
                if(s2[k]==s3[i]):
                    cc=1
                    print("i=",i,"k=",k,"s3=",s3[i],"s2=",s2[k])
                    while(k<len(s2)-1):
                        k=k+1
                        i=i+1
                        if(s3[i]!=s2[k]):
                            break
                        print("i=",i,"k=",k,"s3=",s3[i],"s2=",s2[k])
            if(cc==0):
                break
if(i==len(s3)):
    print(True) 
else:
    print(False) 