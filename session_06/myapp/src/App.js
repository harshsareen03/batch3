import logo from "./logo.svg";
import "./App.css";
// import Header from "./Component/Header";
import Home from "./Component/Home";
import About from "./Component/About";
import { Route, Routes } from "react-router-dom";
import Headerb from "./Component/Headerb";
function App() {
  return (
    <>
      {/* normal bootstrap */}
      {/* <Header/> */}
      {/* <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/about' element={<About/>}/>
   
   </Routes>  */}
      {/* react-router-bootstrap and react-bootstrap */}
      <Headerb />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
