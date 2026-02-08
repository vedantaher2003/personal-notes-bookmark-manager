import express from "express";
import mongoose from "mongoose";
import noteRoutes from "./routes/note.routes.js";
import bookmarkRoutes from "./routes/bookmark.routes.js";


const app = express();
app.use(express.json());


mongoose.connect("mongodb://127.0.0.1:27017/notes-bookmarks");


app.use("/api/notes", noteRoutes);
app.use("/api/bookmarks", bookmarkRoutes);


export default app;
