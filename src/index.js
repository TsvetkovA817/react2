import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';

const ul1 = ['Lorem, ipsum dolor 1', 'Lorem, ipsum dolor 2', 'Lorem, ipsum dolor 3'];
const nav = {
  about: '/about',
  home: '/home',
  catalog: '/catalog',
  contacts: '/contacts'
}
const title1 = 'Title lorem, ipsum dolor';
const hero = 'Hero lorem, ipsum dolor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App title1={title1} hero={hero} ul1={ul1} nav={nav} />
  </React.StrictMode>
);

reportWebVitals();
