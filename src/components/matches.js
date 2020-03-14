import React, { Component } from "react";

export class Matches extends React.Component {
  render() {
    return (
      <div
        style={{
          "margin-left": "300px",
          "margin-right": "300px",
          "margin-top": "50px"
        }}
      >
        <h2>UPCOMING MATCHES</h2>
        <table class="table table-dark">
          <thead>
            <td>Teams</td>
            <td></td>
            <td>League</td>
            <td>Date and Time</td>
            <td>Location</td>
          </thead>
          <tbody>
            <tr>
              <td>West Ham</td>
              <td>Wolves</td>
              <td>Premier League</td>
              <td>14/04/2020 at 11:00PM</td>
              <td>Boleyn Ground, London</td>
            </tr>
            <tr>
              <td>Vitality</td>
              <td>NRG</td>
              <td>RLCS</td>
              <td>15/03/2020 at 7:00PM</td>
              <td>Online</td>
            </tr>
            <tr>
              <td>LA Lakers</td>
              <td>Boston Celtics</td>
              <td>NBA</td>
              <td>18/03/2020 at 11:00AM</td>
              <td>STAPLES Center</td>
            </tr>
            <tr>
              <td>Avi</td>
              <td>Jason</td>
              <td>Boxing Match</td>
              <td>14/03/2020 at 10:00AM</td>
              <td>Fay Gale Studio</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
