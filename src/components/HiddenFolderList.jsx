
export default function HiddenFolderList({
  folders
}) {
  return (
    <div className="folder-list">
      {folders.map((folder) => (
        <button
          key={folder.name}
          className="folder-card"
        >
          📁 {folder.name}
        </button>
      ))}
    </div>
  );
}
