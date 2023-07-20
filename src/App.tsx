import React from 'react';
import './App.css';
import Counter from './Components/Counter';
import Name from './Components/Name';
import ApiReadOG from './Components/ApiReadOG';
import ApiReadAxios from './Components/ApiReadAxios';
import ApiReadFetch from './Components/ApiReadFetch';
import Yousaf from './Components/Yousaf';


function App() {
  return (
    <div>
      <Counter />
      <Name />
      <ApiReadOG />
      <ApiReadFetch />
      <ApiReadAxios />
      <Yousaf />
    </div>
  );
}

export default App;
