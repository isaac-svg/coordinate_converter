import React from "react";
import Banner from "./components/Banner/Bannner";
import Main from "./components/Main/Main";
import Navbar from "./components/NavBar/Navbar";

const App = () => {
  return (
    <main className="Appwrapper">
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "calc(100vh - 60px)",
        }}
      >
        <Banner />
        <Main />
      </div>
    </main>
  );
};

export default App;
