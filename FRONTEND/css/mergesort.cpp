#include<iostream>
#include<vector>
using namespace std;
void merge(vector<vector<int>>& meetings,int l,int m,int r)
    {
        int n1=l-m+1;
        int n2=r-m;
        int *p=new int[n1*2];
        int *q=new int[n2*2];
        int c1=0,c2=0,pp;
        for(int i=0;i<n1*2;i=i+2)
        {
            *(p+i)=meetings[l+c1][0];
            *(p+i+1)=meetings[l+c1][1];
            c1=c1+1;
        }
        c1=0;
        for(int i=0;i<n2*2;i=i+2)
        {
            *(q+i)=meetings[m+1+c1][0];
            *(q+i+1)=meetings[m+1+c1][1];
            c1=c1+1;
        }
        c1=0;
        c2=0;
        pp=l;
        while(c1<2*n1 && c2<2*n2)
        {
            if(*(p+c1)<*(q+c2))
            {
                meetings[pp][0]=*(p+c1);
                meetings[pp][1]=*(p+c1);
                c1=c1+2;
            }
            else
            {
                meetings[pp][0]=*(q+c2);
                meetings[pp][1]=*(q+c2);
                c2=c2+2;
            }
        }
        while(c1!=2*n1)
        {
            meetings[pp][0]=*(q+c2);
            meetings[pp][1]=*(q+c2);
            c2=c2+2;
        }
        while(c2!=2*n2)
        {
            meetings[pp][0]=*(p+c1);
            meetings[pp][1]=*(p+c1);
            c1=c1+2;
        }
    }
    void mergesort(vector<vector<int>>& meetings,int l,int r)
    {
        if(l<r)
        {
            int m=l+(r-l)/2;
            mergesort(meetings,l,m);
            mergesort(meetings,m+1,r);
            merge(meetings,l,m,r);
        }
    }
    int main()
    {
        vector<vector<int>> meetings;
        vector<int> kk;
        kk.push_back(3);
        kk.push_back(5);
        meetings.push_back(kk);
        kk[0]=1;
        kk[1]=20;
        meetings.push_back(kk);
        kk[0]=6;
        kk[1]=8;
        meetings.push_back(kk);
        kk[0]=2;
        kk[1]=10;
        meetings.push_back(kk);
        kk[0]=4;
        kk[1]=9;
        meetings.push_back(kk);
        for(int i=0;i<meetings.size();i++)
        {
            for(int j=0;j<2;j++)
            {
                cout<<meetings[i][j]<<"  ";
            }
            cout<<endl;
        }
    }
  