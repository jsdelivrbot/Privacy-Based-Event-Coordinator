import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Sparklines, SparklinesLine} from 'react-sparklines';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class WeatherList extends Component {
  renderWeather(cityData) {
    const cityName = cityData.city.name;
    const key = cityData.city.id;
    const tempList = cityData.list.map(weather => weather.main.temp);
    const pressList = cityData.list.map(weather => weather.main.pressure);
    const humidList = cityData.list.map(weather => weather.main.humidity);

    return (
      <TableRow key={key}>
        <TableRowColumn>{cityName}</TableRowColumn>
        <TableRowColumn>
          <Sparklines height={120} width={180} data={tempList}>
            <SparklinesLine color="red" />
          </Sparklines>
        </TableRowColumn>
        <TableRowColumn>
          <Sparklines height={120} width={180} data={pressList}>
            <SparklinesLine color="blue" />
          </Sparklines>
        </TableRowColumn>
        <TableRowColumn>
          <Sparklines height={120} width={180} data={humidList}>
            <SparklinesLine color="green" />
          </Sparklines>
        </TableRowColumn>
      </TableRow>
    );
  }

  render() {
    return (
      <div className="container">
        <Table>
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
            >
            <TableRow>
              <TableHeaderColumn>City</TableHeaderColumn>
              <TableHeaderColumn>Temperature</TableHeaderColumn>
              <TableHeaderColumn>Pressure</TableHeaderColumn>
              <TableHeaderColumn>Humidity</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
              {this.props.weather.map(this.renderWeather)}
          </TableBody>
        </Table>
      </div>
    );
  }
}

// Equivalent to: mapStateToProps(state)
function mapStateToProps({weather}) {
  // { weather } === {weather : weather}
  return {weather};
}

export default connect(mapStateToProps)(WeatherList);
