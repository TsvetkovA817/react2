import React from 'react';
import './nav.css';

import {
  Link,
} from "react-router-dom";


class Nav extends React.Component {

  render() {
    let nav = this.props.nav;
    return (
      <div className="nav">
        {Object.keys(nav).map(el => {
          // return <li key={el}><a href={nav[el]}>{el}</a></li>
          return <li key={el}><Link to={nav[el]}>{el}</Link></li>

        })}
      </div>
    );
  }
}

export default Nav;
