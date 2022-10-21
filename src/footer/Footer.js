import React from 'react';
import './footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className="section footer-classic context-dark bg-image" style={{ background: "#3b3e44", color: "#fff" }}>
        <div className="App-footer" >
          <h3>Contact as</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint autem distinctio adipisci impedit est sunt</p>
          <h3>Tel: 8-888-888-888</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint autem distinctio adipisci impedit est sunt</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
