import "./App.css";
import SignUpForm from "./Components/SignUpForm";
import Authentication from "./Components/Authentication";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      <SignUpForm token={token} setToken={setToken} />
      <Authentication token={token} setToken={setToken} />
    </>
  );
}

export default App;
