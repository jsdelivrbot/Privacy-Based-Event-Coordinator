import React, {Component} from 'react';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import Snackbar from 'material-ui/Snackbar';

import EventPickerRow from './event-picker-row';

export default class EventTimeTile extends Component {
  constructor(props) {
    super(props);
    this.state = {snackbarIsOpen: false, eventStorage : [], eventIndexTracker : {}, numEventTimes: 1};
    this.onAddEventRow = this.onAddEventRow.bind(this);
    this.onRemoveEventRow = this.onRemoveEventRow.bind(this);
    this.addDateAndTime = this.addDateAndTime.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  onAddEventRow(event) {
    this.setState({numEventTimes: this.state.numEventTimes + 1});
  }

  // TODO
  // THIS METHOD ALSO NEEDS TO REMOVE THE ASSOCIATED VALUE IN THE STORAGE AND TRACKER
  onRemoveEventRow(event) {
    if (this.state.numEventTimes > 1) {
      this.setState({numEventTimes: this.state.numEventTimes - 1});
    }
  }

  addDateAndTime(component, event) {
    this.setState({snackbarIsOpen: true});
    component.setState({pickerDisabled: true});
    var date = component.state.date
    var time = component.state.time
    if ((date != undefined) && (time != undefined)) {
      if ((date != null) && (time != null)) {
        // If this slot number doesn't have an associated event stored then store
        // a new event and add the associated index
        if (this.state.eventIndexTracker[component.props.slotNumber] == undefined) {
          this.state.eventIndexTracker[component.props.slotNumber] = this.state.eventStorage.length
          this.state.eventStorage.push({date, time})
        } else {
        //  Otherwise replace the existing date / time for the associated slot number
          var indexForSlot = this.state.eventIndexTracker[component.props.slotNumber]
          this.state.eventStorage[indexForSlot] = {date, time}
        }
      }
    }
  }

  handleRequestClose() {
    this.setState({snackbarIsOpen: false});
  }

  render() {
    return (
      <div className="container">
        <Card expanded={true}>
          <CardHeader
            title="Event Time Tile"
            subtitle=""
            showExpandableButton={false}
          />
          <CardText>
            <form className="form-inline">
              <div className="row">
                <div className="col-xs-12">
                    {[...Array(this.state.numEventTimes)].map((x, i) =>
                      <div key={i}>
                        <hr></hr>
                        <EventPickerRow
                          slotNumber = {i+1}
                          addDateAndTime = {this.addDateAndTime}
                        />
                      </div>
                    )}
                </div>
              </div>
              <hr></hr>
              <div className="row">
                <div className="col-md-1 col-sm-2 col-xs-2">
                  <FloatingActionButton
                    mini={true}
                    onClick={this.onAddEventRow}
                    >
                   <ContentAdd />
                 </FloatingActionButton>
                </div>
                <div className="col-md-10 col-sm-8 col-xs-8"></div>
                <div className="col-md-1 col-sm-2 col-xs-2">
                  <FloatingActionButton
                    mini={true}
                    secondary={true}
                    onClick={this.onRemoveEventRow}
                    >
                   <ContentRemove />
                 </FloatingActionButton>
                </div>
              </div>
            </form>
            <Snackbar
              open={this.state.snackbarIsOpen}
              message="Event information saved!"
              autoHideDuration={2250}
              onRequestClose={this.handleRequestClose}
            />
          </CardText>
        </Card>
      </div>
    );
  }
}
