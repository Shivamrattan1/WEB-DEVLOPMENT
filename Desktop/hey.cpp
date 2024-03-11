#include <iostream>
#include <vector>
using namespace std;
int main()
{
    vector<int> v,z;
    int i;
    for(i=1;i<=5;i++)
    {
        v.push_back(i*2);
        z.push_back(i*3);
    }
    cout<<"printing v vector using operator[]"<<endl;
    for(int j=0; j<v.size(); j++) 
        cout<<v[j]<<' '; 
        cout<<endl;
    cout<<"printing z vector using iterator[]"<<endl;
    vector<int>::iterator itr,ptr,ftr;
    for(itr=z.begin();itr<z.end();itr++) 
        cout<<*itr<<' '; 
        cout<<endl;
    cout<<"elements at front and back of v vector"<<endl;
    cout<<v.front()<<"  "<<v.back()<<endl;
    ptr=v.begin();
    ftr=z.end();
    ptr = next(ptr, 3); 
    // Using prev() to return new iterator 
    // points to 3 
    ftr = prev(ftr, 3); 
     
    // Displaying iterator position 
    cout << "The position of new iterator using next() is : "; 
    cout << *ptr << " "; 
    cout << endl; 
     
    // Displaying iterator position 
    cout << "The position of new iterator using prev() is : "; 
    cout << *ftr << " "; 
    cout << endl; 
    cout<<"copying 1 vector elements in other using inserter() inserts z vector after 3rd position in v "<<endl;
    copy(z.begin(), z.end(), inserter(v,ptr));
    for(int j=0; j<v.size(); j++) 
        cout<<v[j]<<' '; 
        cout<<endl;
    cout<<"inserting element at 4 position in v using insert"<<endl;
    v.insert(v.begin() + 3, 25);
    for(int j=0; j<v.size(); j++) 
        cout<<v[j]<<' '; 
        cout<<endl;
    cout<<"deleting element at 3 position in  z using using"<<endl;
    z.erase(z.begin()+3);
    for(int j=0; j<z.size(); j++) 
        cout<<z[j]<<' '; 
        cout<<endl;
        return 0;
}
    