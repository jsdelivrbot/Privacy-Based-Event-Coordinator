import React, { Component } from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {sendEventData} from '../actions/index';

import RaisedButton from 'material-ui/RaisedButton';
import EventTimeTile from '../components/event-time-tile';
import InviteeTile from '../components/invitee-tile';
import ResponseTile from '../components/response-tile';

class EventPlanner extends Component {
  constructor(props) {
    super(props);
    this.renderSubmitButton = this.renderSubmitButton.bind(this);
    this.onClickSubmitButton = this.onClickSubmitButton.bind(this);
  }

  onClickSubmitButton(event) {
    var eventInformation = this.refs.eventTile.state.eventStorage;
    var inviteeInformation = this.refs.inviteeTile.state.inviteeStorage;
    this.props.sendEventData({eventInformation, inviteeInformation});
  }

  renderSubmitButton() {
    if (this.props.showSubmitButton == true) {
      return (
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
      );
    }
  }

  render() {
    return(
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
            <ResponseTile
              ref = 'responseTile'
            />
          </div>
        </div>
        {this.renderSubmitButton()}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({sendEventData}, dispatch);
}

export default connect(null, mapDispatchToProps)(EventPlanner);
