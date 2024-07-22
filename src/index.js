import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import { createGlobalStyle } from 'styled-components';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './Components/Header';
import Favorites from './pages/Favotites';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  li {
    list-style: none;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Router>
      <Header/>
      <Routes>
        <Route path="/favoritos" element={<Favorites/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);
