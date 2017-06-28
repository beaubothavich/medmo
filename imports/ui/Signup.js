import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { Accounts } from 'meteor/accounts-base';


export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      selectValue:''
    };
  }

  componentDidMount(){
	  $(document).ready(function() {
	    $('select').material_select();
	  });	
    $(ReactDOM.findDOMNode(this.refs.mySelectBox)).on('change',this.handleChange.bind(this));	  
    //bind(this) so setState can be called in render
  }

  handleChange(e) {
    this.setState({selectValue: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();

    let name = this.refs.name.value.trim();
    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();
    let confirmPassword = this.refs.confirmPassword.value.trim();
    let accountType = this.state.selectValue;

    if (!name) {
      return this.setState({error: 'Please enter your full name'});
    }

    if (!accountType) {
      return this.setState({error: 'Please choose an account type'});
    }

    if (password.length < 9) {
      return this.setState({error: 'Password must be more than 8 characters long'});
    }

    if (password != confirmPassword) {
      return this.setState({error: 'Passwords do not match'});
    }

    Accounts.createUser({email, password}, (err) => {
      if (err) {
        this.setState({error: err.reason});
      } else {
        this.setState({error: ''});
      }
    });
  }
  
  render() {
    return (
      <div>
        <h1 style={{display: 'flex', justifyContent: 'center'}}>Join</h1>
        {this.state.error ? <p style={{display: 'flex', justifyContent: 'center'}} >{this.state.error}</p> : undefined}
        <div className="container" style={{display: 'flex', justifyContent: 'center'}}>
          <div className="row">
            <form onSubmit={this.onSubmit.bind(this)} noValidate className="col s12">
              <div className="row">
                
                <div className="input-field col s12">
                  <input  type="text" ref="name" name="name"/>
                  <label htmlFor="name">Full Name</label>
                </div>
                <div className="input-field col s6">
                  <input  type="email" ref="email" name="email"/>
                  <label htmlFor="email">Email</label>
                </div>
                <div className="input-field col s6">
                  <select ref="mySelectBox" value={this.state.selectValue} onChange={this.handleChange}>
                    <option value="" disabled defaultValue>Choose your option</option>
                    <option value="1">Main Administrator</option>
                    <option value="2">Restricted Administrator</option>
                    <option value="3">Department Supervisor</option>
                    <option value="4">Operations Staff</option>
                  </select>
                  <label>Account Type</label>
                </div>
                <div className="input-field col s6">
                  <input type="password" ref="password" name="password"/>
                  <label htmlFor="password">Password</label>              
                </div>
                <div className="input-field col s6">
                  <input type="password" ref="confirmPassword" name="confirmPassword"/>
                  <label htmlFor="confirmPassword">Confirm Password</label>              
                </div>
              </div> 
              <button className="waves-effect waves-light btn">Create Account</button>
            </form>
            <Link to="/">Have an account?</Link>
          </div> 
        </div>
      </div>
    );
  }
}
