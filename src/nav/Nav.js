import React from 'react';
import './nav.css';

class Nav extends React.Component {

  render() {
    let nav = this.props.nav;
    return (
      <div className="nav">
        {Object.keys(nav).map(el => {
          return <li key={el}><a href={nav[el]}>{el}</a></li>
        })}
      </div>
    );
  }
}

export default Nav;
