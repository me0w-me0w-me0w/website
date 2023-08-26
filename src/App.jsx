import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./deepak/Footer";
import Navbar from "./piyush/Navbar";
import Home from "./Components/Home";
import Reservation from "./deepak/Pages/Reservation";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      <Reservation />
      <Footer />
    </div>
  );
}

export default App;
