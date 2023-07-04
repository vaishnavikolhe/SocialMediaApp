import Home from "./Components/Home";
import PostDetails from "./Components/PostDetails";
import { Routes,Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
function App() {
  
  
  return (
    <div className="App">
       <Navbar></Navbar>
       <Routes>
          <Route path="/" element={<Home/>} />
          <Route path={`/item/:x`} element={<PostDetails />} />
       </Routes>
    </div>
  );
}

export default App;
