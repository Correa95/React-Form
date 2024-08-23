import { useState } from "react";

function Authentication({ token }) {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  async function handleClick() {
    // console.log("mathew");
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          // method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer${token}`,
          },
        }
      );
      const result = await response.json();
      console.log("result", result);
      setSuccessMessage(result.message);
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <div>
      <h2>Authentication</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <button onClick={handleClick}>Authenticate Token</button>
    </div>
  );
}

export default Authentication;
