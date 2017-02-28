import React, { Component } from 'react';

import EventPlanner from '../containers/event-planner';

export default class App extends Component {
  render() {
    return(
      <div className="container" id="app-container">
        <EventPlanner
          isNewEvent={true}
        />
      </div>
    );
  }
}
