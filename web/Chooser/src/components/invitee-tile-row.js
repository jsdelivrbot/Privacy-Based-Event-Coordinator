import React from 'react';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

var InviteeTileRow = React.createClass({
  componentWillMount() {
    this.setState({email:''});
  },

  onEmailFieldInputChange(event, newValue) {
    this.setState({email: newValue});
  },

  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <FlatButton
              label={'Slot ' + this.props.slotNumber}
              disabled={true} />
          </div>
          <div className="col-sm-9">
            <TextField
              hintText = "Enter an email"
              ref = 'emailField'
              onChange = {this.props.onEmailFieldChange.bind(null, this)}
            />
          </div>
        </div>
      </div>
    );
  }
});

export default InviteeTileRow;
