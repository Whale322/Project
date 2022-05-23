import "./App.css";
import React from "react";
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from "./Components/Navibar";
import{List} from './list';
import{Last} from './last';
import{BrowserRouter as Router, Routes, Route,} from "react-router-dom";

function App(){
  return (
    <>
    <Router>
    <NaviBar />
    <Routes>
      <Route exact path="/list" element={<List/>} />
      <Route exact path="/last" element={<Last/>} />
    </Routes>
    </Router>
    </>
  )
}
export default App;