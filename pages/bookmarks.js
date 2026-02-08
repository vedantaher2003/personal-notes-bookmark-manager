import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { api } from "../services/api";

export default function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);
  const [url, setUrl] = useState("");

  const loadBookmarks = async () => {
    setBookmarks(await api("/bookmarks"));
  };

  useEffect(() => {
    loadBookmarks();
  }, []);

  const addBookmark = async () => {
    if (!url.trim()) return;
    await api("/bookmarks", "POST", { url });
    setUrl("");
    loadBookmarks();
  };

  const deleteBookmark = async (id) => {
    await api(`/bookmarks/${id}`, "DELETE");
    loadBookmarks();
  };

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">🔖 Bookmarks</h2>

      <div className="flex gap-2 mb-6">
        <input
          className="bg-zinc-800 border border-zinc-700 rounded px-3 py-2 w-full"
          placeholder="Paste website URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          onClick={addBookmark}
          className="bg-gradient-to-r from-primary to-accent px-4 py-2 rounded"
        >
          Save
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {bookmarks.map((b) => (
          <div
            key={b._id}
            className="bg-zinc-800 border border-zinc-700 p-4 rounded-xl"
          >
            <a
              href={b.url}
              target="_blank"
              className="text-primary font-semibold hover:underline"
            >
              {b.title}
            </a>
            <div className="mt-2">
              <button
                onClick={() => deleteBookmark(b._id)}
                className="text-accent text-sm"
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
