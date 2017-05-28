import React from 'react';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';

import Navigation from '/imports/ui/Navigation'; //add / infront to import from same folder

export default class Login extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          error: ''
      };
  }

render() { return (
<div>
    <Navigation/>
    <h1>Login</h1>

    <div className="row">
        <form className="col s12">            
            <div className="row">
                <div className="input-field col s6">
                    <input  id="first_name" type="text" className="validate"/>
                    <label htmlFor="first_name">First Name</label>
                </div>
                <div className="input-field col s6">
                    <input id="last_name" type="text" className="validate"/>
                    <label htmlFor="last_name">Last Name</label>
                </div>
            </div>         
        </form>
    </div>
</div>
    );
  }
}