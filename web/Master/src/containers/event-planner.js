import React, { Component } from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {sendEventData} from '../actions/index';

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
  }

  onClickSubmitButton(event) {
    var proposedTimes = this.refs.eventTile.state.eventStorage;
    var inviteeInformation = this.refs.inviteeTile.state.inviteeStorage;
    var eventDescription = this.refs.eventInformation.state.eventDescription;
    var eventLocation = this.refs.eventInformation.state.eventLocation;
    this.props.sendEventData({proposedTimes, inviteeInformation, eventDescription, eventLocation});
    this.setState({newEvent: false});
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
            <InviteeTile
              ref = 'inviteeTile'
            />
          </div>
          <div className="col-md-6 app-element">
            <EventInformationTile
              ref = 'eventInformation'
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
            <EventInformationTile />
          </div>
          <div className="col-md-6 app-element">
            <InviteeTile />
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (this.renderNewEvent());
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({sendEventData}, dispatch);
}

export default connect(null, mapDispatchToProps)(EventPlanner);
