import { Folder } from "../models/folderModel";

export function insertNode(tree: Folder, folderId: number, name: string, isFolder: boolean): Folder {
  const newNode = {
    id: new Date().getTime(),
    name,
    isFolder,
    items: [],
  };

  if (tree.id === folderId) {
    tree.items.push(newNode);
  }

  tree.items = tree.items.map((child) => insertNode(child, folderId, name, isFolder));
  return tree;
}

export function deleteNode(tree: Folder, folderId: number): Folder | null {
  if (tree.id === folderId) return null;

  tree.items = tree.items
    .map((child) => deleteNode(child, folderId))
    .filter((child) => child !== null) as Folder[];

  return tree;
}
