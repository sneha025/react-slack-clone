import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { SignIn , Slack }from './';


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={SignIn} />
         
          <Route exact path="/slack" component={Slack} />
        </Switch>
      </div>
    );
  }
}

export default App;
