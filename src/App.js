import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title/index.js';
import Table from "./components/Table/index.js";
import API from './utils/API';
import SearchUsers from './pages/SearchUsers/index.js';



function App() {
  return (
    <SearchUsers></SearchUsers>
  );
}

export default App;