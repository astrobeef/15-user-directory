import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserCard from "./components/userCard/";

function App() {
  return (
    <div className="App pt-5">
      <h3>User Directory</h3>

      <UserCard />
    </div>
  );
}

export default App;