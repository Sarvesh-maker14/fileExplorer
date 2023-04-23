const useTraverseTree = () => {
    function InsertNode(tree,folderId,item,isFolder){
        if(tree.id === folderId && tree.isFolder){
            tree.items.unshift({
                id:new Date().getTime(),
            name:item,
            isFolder,
            items:[]
            });
            
            return tree;
        }
    //DFS
    let lastestNode = [];
    latestNode = tree.items.map((ob)=>{
        return InsertNode(ob,folderId,item,isFolder);
    });
    
    return {...tree,items: latestNode}
        
         
    }
    return {InsertNode};
};

export default useTraverseTree;