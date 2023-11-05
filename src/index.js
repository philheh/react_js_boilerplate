import React from "react";
import { createRoot } from "react-dom/client";
import './style.css';
import { App } from './components/App/App.jsx'
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <App/>
    </BrowserRouter>
  </React.StrictMode>
);