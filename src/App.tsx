import {BrowserRouter,Routes,Route } from "react-router-dom";

import "./App.css";
import Home from "./Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
        <Route path="/" element={<Home/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
