import React, {Component} from 'react';
import InviteeTileRow from './invitee-tile-row';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';

export default class InviteeTile extends Component {
  constructor(props) {
    super(props);
    this.state = {inviteeStorage: [], inviteeIndexTracker: {}, numInvitees: 1};
    this.onAddInviteeRow = this.onAddInviteeRow.bind(this);
    this.onRemoveInviteeRow = this.onRemoveInviteeRow.bind(this);
    this.onEmailFieldChange = this.onEmailFieldChange.bind(this);
  }

  onAddInviteeRow(event) {
    this.setState({numInvitees: this.state.numInvitees + 1});
  }

// TODO
// THIS METHOD ALSO NEEDS TO REMOVE THE ASSOCIATED VALUE IN THE STORAGE AND TRACKER
  onRemoveInviteeRow(event) {
    // PROBLEM WITH CURRENT IMPLEMENTATION:
    // ONLY WORKS FOR 1ST VALUE REMOVED
    // if (this.state.numInvitees > 1) {
    //   if (this.state.inviteeIndexTracker[this.state.numInvitees] != undefined) {
    //     this.state.inviteeStorage.splice(this.state.inviteeIndexTracker[this.state.numInvitees], 1);
    //     delete this.state.inviteeIndexTracker[this.state.numInvitees];
    //   }
      this.setState({numInvitees: this.state.numInvitees - 1});
  }

  onEmailFieldChange(component, event) {
    // console.log(component.refs.emailField.input.value);
    var updatedEmail = component.refs.emailField.input.value;
    if (this.state.inviteeIndexTracker[component.props.slotNumber] == undefined) {
      this.state.inviteeIndexTracker[component.props.slotNumber] = this.state.inviteeStorage.length
      this.state.inviteeStorage.push(updatedEmail);
    } else {
      var indexForSlot = this.state.inviteeIndexTracker[component.props.slotNumber]
      this.state.inviteeStorage[indexForSlot] = updatedEmail;
    }
   }

  render() {
    return (
      <div className="container">
        <Card expanded={true}>
          <CardHeader
            title="Invitee Tile"
            showExpandableButton={false}
          />
          <CardText>
            {[...Array(this.state.numInvitees)].map((x, i) =>
              <div key={i}>
                <hr></hr>
                <InviteeTileRow
                  onEmailFieldChange = {this.onEmailFieldChange}
                  slotNumber={i+1}
                />
              </div>
            )}
            <hr></hr>
            <div className="row">
              <div className="col-xs-2">
                <FloatingActionButton
                  mini={true}
                  onClick={this.onAddInviteeRow}
                  >
                 <ContentAdd />
               </FloatingActionButton>
              </div>
              <div className="col-xs-8"></div>
              <div className="col-xs-2">
                <FloatingActionButton
                  mini={true}
                  secondary={true}
                  onClick={this.onRemoveInviteeRow}
                  >
                 <ContentRemove />
               </FloatingActionButton>
              </div>
            </div>
          </CardText>
        </Card>
      </div>
    );
  }
}
