import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Layout from './layout/Layout';

function App() {
  return (
    <div className='App'>
      <Router>
        <Layout />
      </Router>
    </div>
  );
}

export default App;
