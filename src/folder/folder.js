import { useState } from "react";
import explorer from "../data/data";

function Folder({ bawa }) {
  console.log(bawa);

  const [expand, setExpand] = useState();

  if (bawa.isFolder) {
    return (
      <div>
        <div
          className="folder"
          onClick={() => setExpand(!expand)}
          style={{ cursor: "pointer" }}
        >
          <span>📂{bawa.name}</span>
        </div>
        <div style={{ display: expand ? "block" : "none" }}>
          {bawa.items.map((i) => {
            return (
              <div>
                <Folder bawa={i} key={i.id} />
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
