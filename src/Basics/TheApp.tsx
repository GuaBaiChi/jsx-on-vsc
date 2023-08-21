import React from 'react';
import './TheApp.css';
import Counter from './Counter';
import Name from './Name';
import ApiReadOG from './ApiReadOG';
import ApiReadAxios from './ApiReadAxios';
import ApiReadFetch from './ApiReadFetch';
import Yousaf from './Yousaf';


function TheApp() {
  return (
    <div>
      <Counter />
      <Name />
      <ApiReadOG />
      <ApiReadFetch />
      {/* <ApiReadAxios /> */}
      <Yousaf />
    </div>
  );
}

export default TheApp;
