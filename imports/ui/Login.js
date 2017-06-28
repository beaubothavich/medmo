import React from 'react';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data'

//add / infront to import from same folder

export default class Login extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          error: ''
      };
  }
  
 onSubmit(e) {
     e.preventDefault();
     
     let email = this.refs.email.value.trim();
     let password = this.refs.password.value.trim();
     
     Meteor.loginWithPassword( {email}, password, (err) => {
        if (err) {
            this.setState({error: 'Unable to login. Check email and password.'});
        } else {
            this.setState({error: ''});
        } 
     });
 }

 render() {
    return (
    <div>
    <h1>Login</h1>
    
    {this.state.error ? <p>{this.state.error}</p> : undefined}

    <div className="row">
        <form  onSubmit={this.onSubmit.bind(this)} noValidate className="col s12">            
            <div className="row">
                <div className="input-field col s6">
                    <input  type="email" ref="email" name="email"/>
                    <label htmlFor="first_name">Email</label>
                </div>
                <div className="input-field col s6">
                    <input type="password" ref="password" name="password"/>
                    <label htmlFor="last_name">Password</label>
                </div>
            </div>         
        <button className="waves-effect waves-light btn">Login</button>
        </form>
     <Link to="/signup">Need an account?</Link>
    </div>
    </div>
    );
  }
}

// Login.propTypes = {
//   loginWithPassword: React.PropTypes.func.isRequired
// };

// export default createContainer(() => {
//   return {
//     loginWithPassword: Meteor.loginWithPassword
//   };
// }, Login);