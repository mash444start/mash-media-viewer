export async function createMediaUrl(
  fileHandle
) {
  const file =
    await fileHandle.getFile();

  return URL.createObjectURL(file);
}
