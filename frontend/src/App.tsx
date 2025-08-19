import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState<string>("");
  const [OTP, setOTP] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username }),
    });
    const text = await response.text();
    setOTP(text);
  };

  return (
    <div>
      <p>{OTP}</p>
      <form onSubmit={handleSubmit}>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;

