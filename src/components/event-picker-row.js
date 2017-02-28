import React from 'react';

import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import ContentDone from 'material-ui/svg-icons/av/playlist-add';
import ContentRemove from 'material-ui/svg-icons/av/playlist-add';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton';

var EventPickerRow = React.createClass({
  onDateChange(event, date) {
    this.setState({date: date});
  },

  onTimeChange(event, time) {
    this.setState({time: time});
  },

  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <FlatButton label={'Slot ' + this.props.slotNumber} disabled={true} />
          </div>
          <div className="col-md-4">
            <DatePicker
              hintText="Pick a date"
              mode="landscape"
              onChange = {this.onDateChange}
            />
          </div>
          <div className="col-md-4">
            <TimePicker
              hintText="Pick a time"
              onChange = {this.onTimeChange}
            />
          </div>
          <div className="col-sm-2">
            <FloatingActionButton
              mini={true}
              onClick={this.props.addDateAndTime.bind(null, this)}
              >
             <ContentDone />
           </FloatingActionButton>
          </div>
        </div>
      </div>
    );
  }
});

export default EventPickerRow;
