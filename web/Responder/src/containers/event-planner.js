import React, { Component } from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {sendEventData, getEventData} from '../actions/index';

import RaisedButton from 'material-ui/RaisedButton';
import EventTimeTile from '../components/event-time-tile';
import InviteeTile from '../components/invitee-tile';
import ResponseTile from '../components/response-tile';

import EventInformationTile from '../components/event-information-tile';

class EventPlanner extends Component {
  constructor(props) {
    super(props);
    this.state = {newEvent: this.props.isNewEvent};
    this.onClickSubmitButton = this.onClickSubmitButton.bind(this);
    this.renderNewEvent = this.renderNewEvent.bind(this);
    this.renderExistingEvent = this.renderExistingEvent.bind(this);
    this.renderApp = this.renderApp.bind(this);
    this.props.getEventData();
  }

  onClickSubmitButton(event) {
    var proposedTimesByInvitee = this.refs.eventTile.state.eventStorage;
    var eventDescription = this.props.events[0].eventDescription;
    var eventLocation = this.props.events[0].eventLocation;
    var proposedTimes = this.props.events[0].proposedTimes;
    proposedTimesByInvitee.map(function(currentTime) {
      proposedTimes.push(currentTime);
    });
    this.props.sendEventData({proposedTimes, eventDescription, eventLocation});
  }

  renderNewEvent() {
    return (
      <div className="container" id="app-container">
        <div className="row">
          <div className="col-md-12 app-element">
            <EventTimeTile
              ref = 'eventTile'
             />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 app-element">
            <EventInformationTile
              ref = 'eventInformation'
              fieldsDisabled = {!this.props.isNewEvent}
              eventDescription = {this.props.events[0] ? this.props.events[0].eventDescription : 'Loading...' }
              eventLocation = {this.props.events[0] ? this.props.events[0].eventLocation : 'Loading...' }
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-0 col-sm-4"></div>
          <div className="col-md-12 col-sm-4">
              <RaisedButton
                label="Submit Event"
                primary={true}
                onClick={this.onClickSubmitButton}
              />
          </div>
          <div className="col-md-0 col-sm-4"></div>
        </div>
      </div>
    );
  }

  renderExistingEvent() {
    return (
      <div className="container" id="app-container">
        <div className="row">
          <div className="col-sm-12 app-element">
            <ResponseTile />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 app-element">
            <EventInformationTile />\
          </div>
          <div className="col-md-6 app-element">
            <InviteeTile />
          </div>
        </div>
      </div>
    )
  }

  renderApp() {
    this.renderNewEvent();
  }

  render() {
    return (this.renderNewEvent());
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({sendEventData, getEventData}, dispatch);
}

function mapStateToProps({events}) {
  return {events};
}

export default connect(mapStateToProps, mapDispatchToProps)(EventPlanner);
