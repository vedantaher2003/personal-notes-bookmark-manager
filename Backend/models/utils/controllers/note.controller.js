import Note from "../models/Note.js";


export const createNote = async (req, res) => {
const note = await Note.create(req.body);
res.status(201).json(note);
};


export const getNotes = async (req, res) => {
const { q, tags } = req.query;
const query = {};
if (q) query.$or = [
{ title: new RegExp(q, "i") },
{ content: new RegExp(q, "i") }
];
if (tags) query.tags = { $in: tags.split(",") };
res.json(await Note.find(query));
};


export const getNoteById = async (req, res) => {
const note = await Note.findById(req.params.id);
if (!note) return res.status(404).json(if (tags) query.tags = { $in: tags.split(",") };
res.json(await Note.find(query));
};


export const getNoteById = async (req, res) => {
const note = await Note.findById(req.params.id);
if (!note) return res.status(404).json({ message: "Note not found" });
res.json(note);
};


export const updateNote = async (req, res) => {
const note = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
if (!note) return res.status(404).json({ message: "Note not found" });
  export const updateNote = async (req, res) => {
const note = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
if (!note) return res.status(404).json({ message: "Note not found" });
res.json(note);
};
  export const deleteNote = async (req, res) => {
await Note.findByIdAndDelete(req.params.id);
res.status(204).end();
};
```js
import Note from "../models/Note.js";


export const createNote = async (req, res) => {
const note = await Note.create(req.body);
res.status(201).json(note);
};


export const getNotes = async (req, res) => {
const { q, tags } = req.query;
const query = {};
if (q) query.title = new RegExp(q, "i");
if (tags) query.tags = { $in: tags.split(",") };
res.json(await Note.find(query));
