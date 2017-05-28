import React from 'react';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';

import Navigation from '/imports/ui/Navigation'; //add / infront to import from same folder

export default class HomePage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          error: ''
      };
  }

render() { return (
<div>
    <Navigation/>
    <h1>HomePage</h1>
</div>
    );
  }
}