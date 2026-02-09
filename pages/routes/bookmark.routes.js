import { Router } from "express";
import {
createBookmark,
getBookmarks,
getBookmarkById,
updateBookmark,
deleteBookmark
} from "../controllers/bookmark.controller.js";


const router = Router();
router.post("/", createBookmark);
router.get("/", getBookmarks);
router.get("/:id", getBookmarkById);
router.put("/:id", updateBookmark);
router.delete("/:id", deleteBookmark);
export default router;
```js
import { Router } from "express";
import { createBookmark, getBookmarks } from "../controllers/bookmark.controller.js";


const router = Router();
router.post("/", createBookmark);
router.get("/", getBookmarks);
export default router;
