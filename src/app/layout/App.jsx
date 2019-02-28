import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import EventDashBoard from '../../features/event/EVentDashboard/EventDashboard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Re-vents</h1>
        <EventDashBoard/>
      </div>
    );
  }
}

export default App;
