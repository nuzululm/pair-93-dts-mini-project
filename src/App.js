import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <div className="flex items-center justify-between h-20"></div>
      <Footer />
    </div>
  );
}

export default App;
