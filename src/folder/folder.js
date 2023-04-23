import { useState } from "react";
import explorer from "../data/data";

function Folder({ bawa,handleInsertNode }) {
  console.log(bawa);

  const [expand, setExpand] = useState();
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false
  });
  
  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder
    });
  };
  
  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);

      setShowInput({ ...showInput, visible: false });
    }
  };

  if (bawa.isFolder) {
    return (
      <div>
        <div
          className="folder"
          onClick={() => setExpand(!expand)}
          style={{ cursor: "pointer" }}
        >
          <span>📂{bawa.name}</span>
          <div>
            <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
            <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
          </div>
        
        </div>
        <div style={{ display: expand ? "block" : "none" }}>
            {showInput.visible && (
            <div className="inputContainer">
           <span>{showInput.isFolder? "📁" : "📄"}</span> 
           <input
              type="text"
              className="inputContainer__input"
              autoFocus
              onKeyDown={onAddFolder}
              onBlur={() => setShowInput({ ...showInput, visible: false })}
              />
              </div>
          )}
          {bawa.items.map((i) => {
            return (
              <div>
                <Folder handleInsertNode={handleInsertNode} bawa={i} key={i.id} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="file" style={{ cursor: "pointer" }}>
        📄{bawa.name}
      </div>
    );
  }
}

export default Folder;
