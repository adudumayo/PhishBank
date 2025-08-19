import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState<string>("");
  const [greeting, setGreeting] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [canGoAhead, setCanGoAhead] = useState<boolean>(false);
  const [OTP, setOTP] = useState<string>("");
  const [flag, setFlag] = useState<string>("");

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

  const handleFlagAccess = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/flag", { method:"GET", });
    const serverFlag = await response.text();
    setFlag(serverFlag);
  };

  return (
    <div>
      <h1>WELCOME TO PHISHBANK</h1>
      <h2>Where Fish Bank</h2>
      <form onSubmit={handleSubmit}>
        <input value={username} placeholder="username" onChange={(e) => setUsername(e.target.value)} />
        <br></br>
        <input value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)} />
        <br></br>
        <button type="submit">Get OTP</button>
      </form>
      <h3>{greeting}</h3>

      <form onSubmit={handleFlagAccess}>
        <input value={OTP} placeholder="OTP" onChange={(e) => setOTP(e.target.value)} />
        <button disabled={!canGoAhead}>Log In</button>
      </form>
      <h1>{flag}</h1>
    </div>
  );
}

export default App;

