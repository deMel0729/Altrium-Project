import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error(error);
        setMessage("Failed to connect to Django");
      });
  }, []);

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>React + Django Connection Test</h1>
      <h2>{message}</h2>
    </div>
  );
}

export default App;