import React from 'react';
import logo from './logo.svg';
import './App.css';

import { defineCustomElements } from 'stencil-components/loader';

import "@siemens/its-theme/dist/its-theme.css";


function App() {

  document.body.classList.add('color-light');
  document.body.classList.add('size-default');

  return (
    <div className="App">

	  <h1>React + Stencil</h1>

    <div class="form__field">
      <its-input></its-input>        
    </div>    

    <its-button>Test button</its-button>

    </div>
  );
}

defineCustomElements(window);

export default App;
