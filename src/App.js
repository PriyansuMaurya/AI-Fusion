import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </header>
      <body className="App-body">
        <h1 className="blink">Coming Soon!</h1>
        <div class="p-container">
          <p>
            Get ready for a single, comprehensive platform comprising a
            collection of essential AI tools, prompts, and datasets. Join us as
            we embark on this journey and receive updates through your email.
          </p>
        </div>

        <div className="form">
          <input
            class="input"
            type="text"
            name="email"
            placeholder="Email Address"
          />
          <button className="form-btn">Sign Up</button>
        </div>
      </body>
    </div>
  );
}

export default App;
