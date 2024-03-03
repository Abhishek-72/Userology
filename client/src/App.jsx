import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Platform from "./pages/Platform";
import Resources from "./pages/Resources";
import Header from "./components/Header";
import Middle from "./components/Middle";
import Middle1 from "./components/Middle1";
import Middle2 from "./components/Middle2";
import Middle3 from "./components/Middle3";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
      <Middle />
      <Middle1 />
      <Middle2 />
      <Middle3 />
    </BrowserRouter>
  );
}
