import React from "react";
import CenterPage from "./Components/CenterPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CenterPage>
        <h1>
          <span role="img" aria-label="Construction Sign">
            🚧{" "}
          </span>
          Looks like we're under construction
          <span role="img" aria-label="Construction Sign">
            {" "}
            🚧
          </span>
        </h1>
      </CenterPage>
    </div>
  );
}

export default App;
