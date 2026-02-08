const API_URL = "http://localhost:5000/api";

export const api = async (url, method = "GET", body) => {
  const res = await fetch(`${API_URL}${url}`, {
    method,
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined
  });
  return res.json();
};
