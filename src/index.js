import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import { makeServer } from "./server";

makeServer();

ReactDOM.render(
  
    <Router>
    <App />
    </Router>
 ,
  document.getElementById('root')
);


