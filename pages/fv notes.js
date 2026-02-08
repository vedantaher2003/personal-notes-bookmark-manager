import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { api } from "../services/api";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState(null);

  const loadNotes = async () => {
    const data = await api("/notes");
    setNotes(data);
  };

  useEffect(() => {
    loadNotes();
  }, []);

  const saveNote = async () => {
    if (!title.trim()) return;

    if (editingId) {
      await api(`/notes/${editingId}`, "PUT", { title });
      setEditingId(null);
    } else {
      await api("/notes", "POST", { title });
    }

    setTitle("");
    loadNotes();
  };

  const deleteNote = async (id) => {
    await api(`/notes/${id}`, "DELETE");
    loadNotes();
  };

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">📝 Notes</h2>

      {/* Create / Edit */}
      <div className="flex gap-2 mb-6">
        <input
          className="bg-zinc-800 border border-zinc-700 rounded px-3 py-2 w-full"
          placeholder="Enter note title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={saveNote}
          className="bg-gradient-to-r from-primary to-accent px-4 py-2 rounded"
        >
          {editingId ? "Update" : "Add"}
        </button>
      </div>

      {/* Notes Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {notes.map((n) => (
          <div
            key={n._id}
            className="bg-zinc-800 border border-zinc-700 p-4 rounded-xl hover:shadow-xl transition"
          >
            <h3 className="font-semibold mb-3">{n.title}</h3>

            <div className="flex gap-3 text-sm">
              <button
                onClick={() => {
                  setEditingId(n._id);
                  setTitle(n.title);
                }}
                className="text-primary hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => deleteNote(n._id)}
                className="text-accent hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
