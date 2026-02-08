import { useState } from "react";
import { api } from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const res = await api("/auth/login", "POST", { email, password });
    localStorage.setItem("token", res.token);
    window.location.href = "/notes";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-900">
      <div className="bg-zinc-800 p-6 rounded-xl w-80">
        <h2 className="text-xl font-bold mb-4 text-zinc-100">Login</h2>
        <input
          className="w-full mb-3 p-2 rounded bg-zinc-700"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="w-full mb-3 p-2 rounded bg-zinc-700"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={login}
          className="w-full py-2 rounded bg-gradient-to-r from-primary to-accent"
        >
          Login
        </button>
      </div>
    </div>
  );
}
