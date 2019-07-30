import React from "react";
import CenterPage from "./Components/CenterPage";
import { Alert } from "reactstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CenterPage>
        <Alert color="secondary">
          <h2>
            <span role="img" aria-label="Construction Sign">
              🚧{" "}
            </span>
            Looks like we're under construction, come back later!
            <span role="img" aria-label="Construction Sign">
              {" "}
              🚧
            </span>
          </h2>
        </Alert>
      </CenterPage>
    </div>
  );
}

export default App;
