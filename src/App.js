import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List"
import Ground from "./pages/ground/Ground";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/grounds" element={<List/>}></Route>
        <Route path="/grounds/:id" element={<Ground/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
