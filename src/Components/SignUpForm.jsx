import { useState } from "react";

function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  async function handleSubmit(e) {
    e.preventDefault();
    // console.log("hello");
    // try {
    //   const response = await fetch(
    //     "https://fsa-jwt-practice.herokuapp.com/signup");
    //     method:"POST",
    //     body:JSON.stringify({username,password})
    // } catch (error) {
    //   setError(error.message);
    // }
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
          />{" "}
        </label>

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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignUpForm;
