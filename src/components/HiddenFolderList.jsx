export default function HiddenFolderList({
  folders,
  onSelect
}) {
  return (
    <div className="folder-list">
      {folders.map((folder) => (
        <button
          key={folder.name}
          className="folder-card"
          onClick={() =>
            onSelect(folder)
          }
        >
          📁 {folder.name}
        </button>
      ))}
    </div>
  );
}
