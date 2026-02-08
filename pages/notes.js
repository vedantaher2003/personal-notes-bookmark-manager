import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { api } from "../services/api";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    api("/notes").then(setNotes);
  }, []);

  const addNote = async () => {
    const newNote = await api("/notes", "POST", { title });
    setNotes([...notes, newNote]);
    setTitle("");
  };

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Notes</h2>

      <div className="flex gap-2 mb-6">
        <input
          className="bg-zinc-800 border border-zinc-700 rounded px-3 py-2 w-full"
          placeholder="New note title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={addNote}
          className="bg-gradient-to-r from-primary to-accent px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {notes.map((n) => (
          <div
            key={n._id}
            className="bg-zinc-800 border border-zinc-700 p-4 rounded-xl"
          >
            <h3 className="font-semibold">{n.title}</h3>
          </div>
        ))}
      </div>
    </Layout>
  );
}
