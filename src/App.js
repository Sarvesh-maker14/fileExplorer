import { useState } from "react";
import "./styles.css";
import explorer from "./data/data.js";
import Folder from "./folder/folder";
import useTraverseTree from "./data/useTraverseTree";

export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  
  const {InsertNode} = useTraverseTree();
  
  const handleInsertNode = (folderId,item,isFolder) => {
    const finalTree = InsertNode(explorerData,folderId,item,isFolder);
    setExplorerData(finalTree);
  }
  
  
  // console.log(explorerData);
  return (
    <div className="App">
      <Folder handleInsertNode={handleInsertNode} bawa={explorerData} />
      {/* passing state as prop */}
    </div>
  );
}
