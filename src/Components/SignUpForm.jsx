import { useState } from "react";
// import styles from "./SignUpForm.module.css";

function SignUpForm({ setToken, token }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);

  const [error, setError] = useState(null);
  async function handleSubmit(e) {
    e.preventDefault();
    // setUsername(e.target.value) < 7 ? visible : null;
    // setUserPassword(e.target.value) < 7 ? visible : null;

    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        { method: "POST", body: JSON.stringify({ username, password }) }
      );
      const json = await response.json();
      setToken(json.token);
      setSuccessMessage(json.message);
    } catch (error) {
      setError(error.message);
    }
    setUsername("");
    setPassword("");
  }
  return (
    <div>
      <h1>sign Up{error && <p>{error}</p>}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          UserName:
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />

        {/* {setUsername(username) < 7 && (
          <small>Your username is less than 7 characters</small>
        )} */}

        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        {/* <small>Your password is less than 7 characters</small> */}

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignUpForm;
