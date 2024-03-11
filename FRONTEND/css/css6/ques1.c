/*
Q.1. Write a C++ program to input two numbers and check whether they are twin prime numbers or not.
Hint: Twin prime numbers are the prime numbers whose difference is 2.
For example: (5,7),(11,13),... and so on.
*/

#include<iostream>
using namespace std;
int main()
{
    int x,y,z,i,c1=0,c2=0,c3=0;
    cin>>x>>y;
    
    for(i=2;i<x/2;i++)
    {
        if(x%i==0)
        {
            c1=1;
        }
    }
    for (i=2;i<y/2;i++)
    {
        if(y%i==0)
        {
            c2=1;
        }
    }
    z=x-y;
    if(z!=2 && z!=-2)
    {
        c3=1;
    }
    if(c1==0 && c2==0 && c3==0)
    {
        cout<<"twin prime"<<x<<"and"<<y;
    }
    return 0;
}