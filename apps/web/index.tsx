import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import MainContainer from './src/main';

const node = document.getElementById('root');

if (!node){
  throw new Error('Root not found, bailing');
}

const root = ReactDOM.createRoot(node);

root.render(
  <StrictMode>
    <MainContainer />
  </StrictMode>
);
