import "./App.css";
import { Route,Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";


function App() {
  return (
    <div className="App">
    <Navbar/>
  <Routes>
    <Route path="login" element={<>Login</>}/>
    <Route path="home" element={<>Home</>}/>
 
  </Routes>
    </div>
  );
}

export default App;
