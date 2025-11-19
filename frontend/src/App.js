import React, { useState } from "react";

function App() {
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState("Click the button to connect to backend...");

  const fetchMessage = () => {
    fetch("/api/hello")
      .then(res => {
        if (!res.ok) throw new Error("Backend offline");
        return res.json();
      })
      .then(data => {
        setMsg(data.message);
        setStatus("✅ Backend Connected Successfully!");
      })
      .catch(() => setStatus("❌ Backend Not Connected"));
  };

  return (
    <div style={{ fontFamily: "Arial", textAlign: "center", marginTop: "40px" }}>
      <h2>{status}</h2>
      {msg && <h1>{msg}</h1>}
      <button onClick={fetchMessage} style={{ marginTop: "20px", padding: "10px 20px" }}>
        Connect to Backend
      </button>
    </div>
  );
}

export default App;
