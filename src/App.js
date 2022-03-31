import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import './App.scss';

function App() {
  return (
    <div className='App'>
      <h1>HEADER</h1>
      <FontAwesomeIcon icon={faTwitter} />
    </div>
  );
}

export default App;
