import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState<string>("");
  const [greeting, setGreeting] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [canGoAhead, setCanGoAhead] = useState<boolean>(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username }),
    });
    const text = await response.text();
    setGreeting(text);
    setCanGoAhead(true);
  };

  return (
    <div>
      <h1>WELCOME TO PHISHBANK</h1>
      <h3>Where Fish Bank</h3>
      <form onSubmit={handleSubmit}>
        <input value={username} placeholder="username" onChange={(e) => setUsername(e.target.value)} />
        <br></br>
        <input value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)} />
        <br></br>
        <button type="submit">Log in</button>
        <button disabled={!canGoAhead}>Heyy</button>
      </form>
      <h1>{greeting}</h1>
    </div>
  );
}

export default App;

