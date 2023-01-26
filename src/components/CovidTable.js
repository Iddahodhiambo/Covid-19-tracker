import React, { Component } from 'react';

class CovidTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch('https://api.npoint.io/57e11db613c05d4c58dc/Countries/')
      .then(response => response.json())
      .then(data => {
        this.setState({ data });
      });
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Confirmed Cases</th>
            <th>Deaths</th>
            <th>Recovered</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map(item => (
            <tr key={item.country}>
              <td>{item.country}</td>
              <td>{item.confirmed}</td>
              <td>{item.deaths}</td>
              <td>{item.recovered}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
} 

export default CovidTable;


