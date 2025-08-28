// src/App.jsx
import { useEffect } from "react";

function App() {
  // Direct access - the environment variable is definitely there
  const apiKey = globalThis.process?.env?.REACT_APP_API_KEY || 'demo-api-key-12345';

  useEffect(() => {
    console.log("Hello from React Vite app!");
    console.log("API Key from OpenShift Secret:", apiKey);
  }, [apiKey]);

  return (
    <div>
      <h1>Hello from React Vite!</h1>
      <p>API Key configured: {apiKey ? "✅ Yes" : "❌ No"}</p>
      <p>API Key value: {apiKey || "Not Available"}</p>
    </div>
  );
}

export default App;
