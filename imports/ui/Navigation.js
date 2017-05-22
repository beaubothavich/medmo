import React from 'react';   
   
export default class Navigation extends React.Component {
  render() {   
   return (
   <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Med Temp</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li><a href="sass.html">Sass</a></li>
      </ul>
    </div>
  </nav>
   )
  }
}