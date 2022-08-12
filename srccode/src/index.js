import React from 'react';
import  ReactDOM  from 'react-dom/client';
import App from './App';
import './index.css';
import { AppProvider } from './flow';
const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppProvider><App/></AppProvider>);