import React from 'react';
import  ReactDOM  from 'react-dom/client';
import App from './Js codes/App';
import './css styles/index.css';
import { AppProvider } from './Js codes/flow';
const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppProvider><App/></AppProvider>);