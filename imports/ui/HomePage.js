import React from 'react';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';

import Navigation from '/imports/ui/Navigation';

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
        
        { this.state.error ? <p>{this.state.error}</p> : undefined }

    <div class="row">
        <form class="col s12">
            
            <div class="row">
                <div class="input-field col s6">
                    <input placeholder="Placeholder" id="first_name" type="text" class="validate"/>
                    <label for="first_name">First Name</label>
                </div>
                <div class="input-field col s6">
                    <input id="last_name" type="text" class="validate"/>
                    <label for="last_name">Last Name</label>
                </div>
            </div>         
        </form>
    </div>
</div>
    );
  }
}