import { useState } from "react";

import HiddenFolderList from "./HiddenFolderList";
import SubfolderList from "./SubfolderList";

import {
  scanHiddenFolders,
  scanSubfolders
} from "../utils/fileScanner";

export default function FolderPicker() {
  const [hiddenFolders, setHiddenFolders] =
    useState([]);

  const [subfolders, setSubfolders] =
    useState([]);

  async function handleSelectFolder() {
    try {
      const rootHandle =
        await window.showDirectoryPicker();

      const folders =
        await scanHiddenFolders(
          rootHandle
        );

      setHiddenFolders(folders);
      setSubfolders([]);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleOpenFolder(
    folder
  ) {
    const result =
      await scanSubfolders(
        folder.handle
      );

    setSubfolders(result);
  }

  return (
    <div className="home">
      <div className="home-card">
        <h1 className="app-title">
          Mash Media Viewer
        </h1>

        {hiddenFolders.length ===
          0 && (
          <button
            className="select-btn"
            onClick={
              handleSelectFolder
            }
          >
            Select Folder
          </button>
        )}

        {hiddenFolders.length >
          0 &&
          subfolders.length ===
            0 && (
            <HiddenFolderList
              folders={
                hiddenFolders
              }
              onSelect={
                handleOpenFolder
              }
            />
          )}

        {subfolders.length >
          0 && (
          <SubfolderList
            folders={subfolders}
            onBack={() =>
              setSubfolders([])
            }
          />
        )}
      </div>
    </div>
  );
}
