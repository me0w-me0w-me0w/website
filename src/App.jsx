import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./deepak/Footer";
import Navbar from "./piyush/Navbar";
import Discover from "./piyush/home_discover";
import Home from "./Components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
    <Navbar/>
    <Discover/>
      {/* <Home /> */}
      <Footer />
    </div>
  );
}

export default App;
