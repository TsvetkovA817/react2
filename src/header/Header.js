import React from 'react';
import logo from './logo.svg';
import './header.css';

class Header extends React.Component {

    render() {

        const title1 = this.props.title1;

        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>{title1}</h1>
                <h2>{this.props.hero}</h2>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        );
    }
}

export default Header;
