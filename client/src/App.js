import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing/index";
import Navbar from './components/Navbar';
//import Login from './pages/Login/index';

const App = () => {
  return (
    <Router>
      <Navbar></Navbar>
      <Landing>
      </Landing>
    </Router>
  );
}

export default App;
