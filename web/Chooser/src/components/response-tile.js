import React, {Component} from 'react';
import EventTimeTable from './event-times-table';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

export default class ResponseTile extends Component {
  constructor(props) {
    super(props);
    this.state = {responses: []};
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();
    console.log("Form submitted.");
  }

  render() {
    return (
      <div className="container">
        <Card expanded={true}>
          <CardHeader
            title="Response Tile"
            showExpandableButton={false}
          />
          <CardText>
            <EventTimeTable
              proposedTimes = {this.props.responses}
            />
          </CardText>
        </Card>
      </div>
    );
  }
}
