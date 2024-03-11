void recoverTree(struct TreeNode* root){
    int k[1000],f=-1,i;
    inorder(root,k,&f);
    for(i=0;i<f;i++)
    {
        printf("%d",&f);
    }
}
void inorder(struct TreeNode* root,int k[],int *f)
{
    if(root==NULL)
    {
        return;
    }
    inorder(root->left,k,f);
    *f = *f + 1;
    k[*f]=root->val;
    inorder(root->right,k,f);
}