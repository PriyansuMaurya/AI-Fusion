import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [email, setEmail] = useState("");

  const sendEmail = async () => {
    try {
      const config = {
        headers: {
          "Context-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/email/register",
        {
          email: email,
        },
        config
      );
      setEmail("");

      alert("Email Subscribed");
    } catch (err) {
      alert("Email Not Subscribed");
      setEmail("");
    }
  };

  return (
    <body className="App">
      <header className="App-header">
        <div className="logo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </header>
      <div className="App-body">
        <h1 className="blink">Coming Soon!</h1>
        <div className="p-container">
          <p>
            Get ready for a single, comprehensive platform comprising a
            collection of essential AI tools, prompts, and datasets. Join us as
            we embark on this journey and receive updates through your email.
          </p>
        </div>

        <div className="form">
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <button
            className="form-btn"
            onClick={() => {
              sendEmail();
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </body>
  );
}

export default App;
