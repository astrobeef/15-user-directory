import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Table from "./components/Table";
import API from './utils/API';
import SearchUsers from './pages/SearchUsers';



function App() {
  return (
    <SearchUsers></SearchUsers>
  );
}

export default App;