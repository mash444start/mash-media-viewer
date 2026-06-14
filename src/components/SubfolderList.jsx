import { scanMediaFiles } from "../utils/fileScanner";

export default function SubfolderList({
  folders,
  onBack
}) {
  async function handleOpen(folder) {
    const files =
      await scanMediaFiles(
        folder.handle
      );

    alert(
      `${folder.name}\n\n${files.length} files found`
    );
  }

  return (
    <>
      <button
        className="back-btn"
        onClick={onBack}
      >
        ← Back
      </button>

      <div className="folder-list">
        {folders.map((folder) => (
          <button
            key={folder.name}
            className="folder-card"
            onClick={() =>
              handleOpen(folder)
            }
          >
            📂 {folder.name}
          </button>
        ))}
      </div>
    </>
  );
}
