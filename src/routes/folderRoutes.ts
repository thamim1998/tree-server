import express from "express";
import { getFolderStructure, addFolder, removeFolder } from "../controllers/folderControllers";

const router = express.Router();

router.get("/", getFolderStructure);
router.post("/add", addFolder);
router.delete("/delete", removeFolder);

export default router;