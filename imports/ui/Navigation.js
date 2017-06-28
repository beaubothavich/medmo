import React from 'react';   
import { Accounts } from 'meteor/accounts-base';
import { Link } from 'react-router';
   
export default class Navigation extends React.Component {
render() { 
   return (
   <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">MedMo</a>
      <ul id="nav-mobile" className="right">
      <li><Link className="waves-effect waves-light btn" onClick={() => Accounts.logout()}>Logout</Link></li>
      </ul>
    </div>
  </nav>
   );
  };
}
