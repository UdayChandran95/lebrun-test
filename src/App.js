import NavBar from "./Navbar/NavBar";
import Home from "./pages/Home/Home";
import Footer from "./Footer/Footer";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";
import Service from "./pages/Services/Service";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
              <NavBar />
              <BrowserRouter>
                 <Routes>
                     <Route index element={<Home />} />
                     <Route path="/home" element={<Home />} />
                     <Route path="/gallery" element={<Gallery />} />
                     <Route path="/service" element={<Service />} />
                     <Route path="/contact" element={<Contact />} />
                 </Routes>
              </BrowserRouter> 
              <Footer />
    </div>
  );
}

export default App;
