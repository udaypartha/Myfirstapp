import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Home from "./MYComponent/Home";
import About from "./MyComponent/About";
import Contact from "./MyComponent/Contact";
import MyNavigate from "./MyComponent/MyNevigate";
import MapData from "./MyComponent/MapData";
import FormHandling from "./MyComponent/FormHandling";
import ApiConnectivity from "./MyComponent/ApiConnectivity";
import ClMethod from "./MyComponent/ClMethod";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/myeffect" element={<myeffect/>} />
          <Route path="/MyNevigate" element={<MyNavigate/>} />
          <Route path="/MapData" element={<MapData/>} />
          <Route path="/FormHandling" element={<FormHandling/>} />
          <Route path="/ApiConnectivity" element={<ApiConnectivity/>} />
          <Route path="/ClMethod" element={<ClMethod/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;