import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

// if the app isn't created by create-react-app
// you need to run npm install --save react to install 'react'
import React from 'react';
// you can use your own design of the app logo
// add logo.png into 'src/App/' folder
import logo from './logo.png';
import NewsPanel from "../NewsPanel/NewsPanel";

class App extends React.Component {
    render() {
        return (
          <div>
              <img className="logo" src={logo} alt="logo"/>
              <div className="container">
                  <NewsPanel />
              </div>
          </div>
        );
    }
}

export default App;