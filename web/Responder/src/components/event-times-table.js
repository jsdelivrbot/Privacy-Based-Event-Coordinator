import React from 'react';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

var EventTimeTable = React.createClass({

  render: function() {
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
            <TableRow>
              <TableRowColumn>MM/DD/YYYY</TableRowColumn>
              <TableRowColumn>HH:MM -ZONE</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Placeholder (date)</TableRowColumn>
              <TableRowColumn>Placeholder (time)</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
});

export default EventTimeTable;
