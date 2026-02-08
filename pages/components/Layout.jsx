import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      <nav className="flex justify-between items-center p-4 border-b border-zinc-700">
        <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Notes & Bookmarks
        </h1>
        <div className="flex gap-4">
          <Link href="/notes">Notes</Link>
          <Link href="/bookmarks">Bookmarks</Link>
        </div>
      </nav>
      <main className="p-6">{children}</main>
    </div>
  );
}
