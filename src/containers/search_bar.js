import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeatherData} from '../actions/index';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    // console.log(event.target.value);
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    // Prevent browser from submitting form upon pressing Enter.
    event.preventDefault();
    this.props.fetchWeatherData(this.state.term);
    this.setState({term: ''});
  }

  render() {
    return (
      <div className="container">
        <div className="row" onSubmit={this.onFormSubmit}>
          <form className ="form-inline">
            <div className="col-xs-9">
              <TextField
                hintText="Enter a city!"
                value={this.state.term}
                onChange={this.onInputChange}
                fullWidth={true}
              />
            </div>
            <div className="col-xs-3">
              <RaisedButton
                  type="submit"
                  label="Search"
                  primary={true}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeatherData}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
