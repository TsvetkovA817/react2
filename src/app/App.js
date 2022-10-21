import React from 'react';
import './App.css';
import Header from '../header/Header';
import Main from '../main/Main';
import Footer from '../footer/Footer';
import Nav from '../nav/Nav';

class App extends React.Component {

  render() {

    const title1 = this.props.title1;
    const ul1 = this.props.ul1;
    const nav = this.props.nav;

    return (
      <div className="App">
        <Header title1={title1} hero={this.props.hero} />
        <Nav nav={nav} />
        <Main ul1={ul1} />
        <Footer />
      </div>
    );
  }
}

export default App;
