import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./deepak/Footer";
import Navbar from "./piyush/Navbar";
import Discover from "./piyush/home_discover";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Menu from "./pages/Menu";
import History from "./pages/History";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/history" element={<History />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        {/* <Home /> */}
        <Discover />
        <Footer />
      </Router>
    </div>
  );
}