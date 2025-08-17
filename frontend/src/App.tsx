import { useState } from "react";

function App() {
  const [username, setUsername] = useState<string>("");
  const [greeting, setGreeting] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username }),
    });
    const text = await response.text();
    setGreeting(text);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <button type="submit">Send</button>
      </form>
      <p>{greeting}</p>
    </div>
  );
}

export default App;

