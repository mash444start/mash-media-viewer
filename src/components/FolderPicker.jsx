import { useState } from "react";

import HiddenFolderList from "./HiddenFolderList";

import { scanHiddenFolders } from "../utils/fileScanner";

export default function FolderPicker() {
  const [folders, setFolders] = useState([]);

  async function handleSelectFolder() {
    try {
      const rootHandle =
        await window.showDirectoryPicker();

      const hiddenFolders =
        await scanHiddenFolders(rootHandle);

      setFolders(hiddenFolders);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="home">
      <div className="home-card">
        <h1 className="app-title">
          Mash Media Viewer
        </h1>

        <button
          className="select-btn"
          onClick={handleSelectFolder}
        >
          Select Folder
        </button>

        {folders.length > 0 && (
          <HiddenFolderList
            folders={folders}
          />
        )}
      </div>
    </div>
  );
}
