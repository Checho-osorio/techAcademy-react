import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import { CartContexProvider } from './context/cart';
import Routing from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <CartContexProvider>
      <BrowserRouter>
        <Header />
        <Routing />
      </BrowserRouter>
      <GlobalStyle />
    </CartContexProvider>
  );
}

export default App;
