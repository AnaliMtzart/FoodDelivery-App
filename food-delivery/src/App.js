import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
// instalar npm install --save styled-components
//router react  npm install react-router-dom
// tpografia de google en index.html public carpeta
// npm install react-icons --save

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
    </Router>
  );
}

export default App;
