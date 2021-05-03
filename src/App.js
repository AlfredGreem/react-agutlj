import React from "react";
import Navbar from "./Navbar";
import Slider from "./Slider";

function App() {
  return (
    <div className="App">
      <div data-component="app-root">
        <Navbar />
        <Slider />
      </div>
    </div>
  );
}

export default App;
