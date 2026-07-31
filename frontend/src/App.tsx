import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddApplication from "./pages/AddApplication";
import EditApplication from "./pages/EditApplication";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddApplication />} />
        <Route path="/edit/:id" element={<EditApplication />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
