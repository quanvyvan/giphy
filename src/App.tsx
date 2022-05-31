import React from "react";
import "./App.css";
import MainLayout from "./layout";
import HomePage from "./pages/home";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <HomePage />
      </MainLayout>
    </div>
  );
}

export default App;
