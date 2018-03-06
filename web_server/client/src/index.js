import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';

import LoginPage from "./Login/LoginPage";

// this is the start of our app
// render the App component on root element in public/index.html
// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<LoginPage />, document.getElementById('root'));

// client can get files from cache when internet is slow
registerServiceWorker();
