import React, {Component} from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

export default class EventTimeTable extends Component {
  constructor(props) {
    super(props);
    this.generateRows = this.generateRows.bind(this);
  }

  generateRows() {
    var output = [];
    if (this.props.proposedTimes) {
      this.props.proposedTimes.map(function(item) {
        var rowDate = item.date.slice(0,10);
        var rowTime = item.time.slice(11,16);
        output.push(
          <TableRow key={item.time}>
            <TableRowColumn>{rowDate}</TableRowColumn>
            <TableRowColumn>{rowTime}</TableRowColumn>
          </TableRow>
        );
      });
    } else {
      return (
        <TableRow>
          <TableRowColumn>Loading...</TableRowColumn>
          <TableRowColumn>Loading...</TableRowColumn>
        </TableRow>
      );
    }
    return output;
  }

  render() {
    return (
      <div className="container">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Date</TableHeaderColumn>
              <TableHeaderColumn>Time</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {this.generateRows()}
          </TableBody>
        </Table>
      </div>
    );
  }
}
