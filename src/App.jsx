import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Hello from React Vite app!");
  }, []);

  return (
    <div>
      <h1>Hello from React Vite!</h1>
    </div>
  );
}

export default App;
