import React from 'react';
import './App.css';
import ClassComponent from './pages/ClassComponent'
import { FunctionComponent } from './pages/FunctionComponent';

function App () {
  return (
    <div className="App">
      {/* <ClassComponent /> */}
      <FunctionComponent />
    </div>
  );
}

export default App;
