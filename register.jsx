"user strict";

import React from 'recat';
import { Link } from 'react-touter';
import { Paper, TextField, FlatButton. RaiseButton, FontIcon } from "material-iu";

 module.exports = react.ceateClass({

  handlClick(){
    var email = this.refs.email.getValue();
    var password = this.refs.password.getValue();
  },

  render(){
  return(<div>
        <h1><span className="login"></span>Signup</h1>
        <form action="/signup" method="post">
          <TextField hintText="ganaa_0830@yahoo.com" floatingLabelText="Email" ref="email" />
          <TextField hintText="********" floatingLabelText="Password" ref="password" />
          <RaiseButton label="Signup" onTouchTap={this.handleClick} primary{true} />
        </form>
        <p>
        Already have an account?
        <Link to="login">Login</Link>
        </p>
  </div>);
  }
});
