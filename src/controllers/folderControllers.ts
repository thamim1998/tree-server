import { Request, Response } from "express";
import { explorerData } from "../models/folderModel";
import { insertNode, deleteNode } from "../utils/treeUtils";

let data = explorerData

export const getFolderStructure = (req: Request, res: Response) => {
  res.json(data);
};

export const addFolder = (req: Request, res: Response) => {
  const { folderId, name, isFolder } = req.body;
  const updatedTree = insertNode(explorerData, folderId, name, isFolder);
  data = updatedTree;
  res.json(data);
};

export const removeFolder = (req: Request, res: Response) => {
  const { folderId } = req.body;
  const updatedTree = deleteNode(explorerData, folderId);
  if (updatedTree) {
    data = updatedTree;                                                                                                                                                   
  } else {
    data = {
      id: -1,
      name: "Root",
      isFolder: true,
      items: [],
    };
  }
  res.json(data);
};