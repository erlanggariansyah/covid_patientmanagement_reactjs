import { Route, Routes } from "react-router-dom";
import Indonesia from "./pages/Indonesia";
import Global from "./pages/Global";
import Province from "./pages/Province";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Global />}/>
      <Route path="/indonesia" element={<Indonesia />}/>
      <Route path="/provinsi" element={<Province />}/>
      <Route path="/about" element={<About />}/>
    </Routes>
  );
}

export default App;
