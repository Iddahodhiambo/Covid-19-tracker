import React, { Component } from 'react';
import "bootstrap";

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
      <table className="table-primary">
        <thead>
          <tr>
            <th scope="col">Country</th>
            <th scope="col">Confirmed Cases</th>
            <th scope="col">Deaths</th>
            <th scope="col">Recovered</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">#</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          {this.state.data.map(item => (
            <tr key={item.Country}>
              <td className= "table-primary">{item.Country}</td>
              <td>{item.TotalConfirmed}</td>
              <td>{item.NewDeaths}</td>
              <td>{item.NewRecovered}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
} 

export default CovidTable;


