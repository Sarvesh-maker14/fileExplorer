import { useState } from "react";
import "./styles.css";
import explorer from "./data/data.js";
import Folder from "./folder/folder";

export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  // console.log(explorerData);
  return (
    <div className="App">
      <Folder bawa={explorerData} />
      {/* passing state as prop */}
    </div>
  );
}
