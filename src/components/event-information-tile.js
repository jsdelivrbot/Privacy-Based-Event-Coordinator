import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import TextField from 'material-ui/TextField';

export default class EventInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {eventDescription: '', eventTime: ''};
    this.onInformationFieldChange = this.onInformationFieldChange.bind(this);
    this.onLocationFieldChange = this.onLocationFieldChange.bind(this);
  }

  onInformationFieldChange(event, updatedDescription) {
    this.setState({eventDescription: updatedDescription});
  }

  onLocationFieldChange(event, updatedLocation) {
    this.setState({eventLocation: updatedLocation})
  }

  render() {
    return (
      <div className="container">
        <Card expanded={true}>
          <CardHeader
            title="Event Information"
            showExpandableButton={false}
          />
          <CardText>
            <TextField
              id="descriptionField"
              hintText="Fill in the event description."
              onChange={this.onInformationFieldChange}
             />
            <hr></hr>
              <TextField
                id="locationField"
                hintText="Fill in the event location."
                onChange={this.onLocationFieldChange}
               />
          </CardText>
        </Card>
      </div>
    );
  }
}
