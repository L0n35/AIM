import React, { Component } from "react";

export class Results extends React.Component {
  render() {
    return (
      <div
        style={{
          "margin-left": "300px",
          "margin-right": "300px",
          "margin-top": "50px"
        }}
      >
        <h2>RESULTS</h2>
        <div
          className="row"
          style={{ height: "75px", border: "3px solid black" }}
        >
          <div >
            <p>Na'Vi</p>
          </div>
          <div
            style={{
              margin: "auto",
              width: "150px"
            }}
          >
            <div
              style={{
                display: "flex",
                height: "68px",
                width: "68px",
                border: "3px solid black",
                float: "right"
              }}
            ></div>
            <div
              style={{
                display: "flex",
                height: "68px",
                width: "68px",
                border: "3px solid black",
                float: "left"
              }}
            ></div>
            <div style={{ "margin-left": "160px" }}>
              <p>G2</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
