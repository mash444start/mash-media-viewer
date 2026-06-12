export default function SubfolderList({
  folders,
  onBack
}) {
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
          >
            📂 {folder.name}
          </button>
        ))}
      </div>
    </>
  );
}
