import React from 'react';
import './App.css';
import Header from '../header/Header';
import Main from '../main/Main';
import Footer from '../footer/Footer';
import Nav from '../nav/Nav';
import Pagenotfound from '../pages/Pagenotfound';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";


class App extends React.Component {

  render() {

    const title1 = this.props.title1;
    const ul1 = this.props.ul1;
    const nav = this.props.nav;

    return (
      <BrowserRouter>

        <div className="App">
          <Header title1={title1} hero={this.props.hero} />
          <Nav nav={nav} />

          <Routes>
            <Route path='/' element={<Main ul1={ul1} txtMainProps={'Lorem, ipsum dolor 1333'} />} />
            <Route path='/home' element={<Main ul1={ul1} txtMainProps={'Lorem, ipsum dolor 1333'} />} />
            <Route path='*' element={<Pagenotfound />} />
          </Routes>

          <Footer />
        </div>

      </BrowserRouter>
    );
  }
}

export default App;
