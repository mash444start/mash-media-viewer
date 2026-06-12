
export async function scanHiddenFolders(rootHandle) {
  const folders = [];

  for await (const [name, handle] of rootHandle.entries()) {
    if (
      handle.kind === "directory" &&
      name.startsWith(".")
    ) {
      folders.push({
        name: name.replace(/^\./, ""),
        handle
      });
    }
  }

  folders.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return folders;
}
