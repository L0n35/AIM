import React, { Component } from "react";
import nba_logo from "../images/nba_logo.jpg";
import nfl_logo from "../images/nfl_logo.png";
import pl_logo from "../images/premier_league_logo.png";
import afl_logo from "../images/afl_logo.png";
import rlcs_logo from "../images/rlcs_logo.png";
import csgo_logo from "../images/csgo_logo.png";
import league_logo from "../images/league_logo.jpg";
import dota2_logo from "../images/dota2_logo.png";
import nrl_logo from "../images/nrl_logo.png";

export class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>LEAGUES/GAMES</h2>
        <div className="row">
          <div className="card" style={{ margin: "auto" }}>
            <div style={{ height: "200px", width: "275px" }}>
              <img
                className="card-img-top"
                src={nba_logo}
                style={{
                  display: "block",
                  "margin-left": "auto",
                  "margin-right": "auto",
                  width: "50%"
                }}
                alt="Card image cap"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">NBA</h5>
              <div className="row">
                <a href="#" class="btn btn-primary">
                  Matches
                </a>
                <a href="#" class="btn btn-primary">
                  Results
                </a>
              </div>
            </div>
          </div>

          <div className="card" style={{ margin: "auto" }}>
            <div style={{ height: "200px", width: "275px" }}>
              <img
                className="card-img-top"
                src={nfl_logo}
                style={{
                  display: "block",
                  "margin-left": "auto",
                  "margin-right": "auto",
                  width: "50%"
                }}
                alt="Card image cap"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">NFL</h5>
              <div className="row">
                <a href="#" class="btn btn-primary">
                  Matches
                </a>
                <a href="#" class="btn btn-primary">
                  Results
                </a>
              </div>
            </div>
          </div>

          <div className="card" style={{ margin: "auto" }}>
            <div style={{ height: "200px", width: "275px" }}>
              <img
                className="card-img-top"
                src={pl_logo}
                alt="Card image cap"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Premier League</h5>
              <div className="row">
                <a href="#" class="btn btn-primary">
                  Matches
                </a>
                <a href="#" class="btn btn-primary">
                  Results
                </a>
              </div>
            </div>
          </div>

          <div className="card" style={{ margin: "auto" }}>
            <div style={{ height: "200px", width: "275px" }}>
              <img
                className="card-img-top"
                src={afl_logo}
                alt="Card image cap"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">AFL</h5>
              <div className="row">
                <a href="#" class="btn btn-primary">
                  Matches
                </a>
                <a href="#" class="btn btn-primary">
                  Results
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* hiii */}

        <div className="row">
          <div className="card" style={{ margin: "auto" }}>
            <div style={{ height: "200px", width: "275px" }}>
              <img
                className="card-img-top"
                src={rlcs_logo}
                style={{
                  display: "block",
                  "margin-left": "auto",
                  "margin-right": "auto",
                  width: "50%"
                }}
                alt="Card image cap"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">RLCS</h5>
              <div className="row">
                <a href="#" class="btn btn-primary">
                  Matches
                </a>
                <a href="#" class="btn btn-primary">
                  Results
                </a>
              </div>
            </div>
          </div>

          <div className="card" style={{ margin: "auto" }}>
            <div style={{ height: "200px", width: "275px" }}>
              <img
                className="card-img-top"
                src={csgo_logo}
                style={{
                  display: "block",
                  "margin-left": "auto",
                  "margin-right": "auto",
                  width: "50%"
                }}
                alt="Card image cap"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">CS:GO</h5>
              <div className="row">
                <a href="#" class="btn btn-primary">
                  Matches
                </a>
                <a href="#" class="btn btn-primary">
                  Results
                </a>
              </div>
            </div>
          </div>

          <div className="card" style={{ margin: "auto" }}>
            <div style={{ height: "200px", width: "275px" }}>
              <img
                className="card-img-top"
                src={league_logo}
                alt="Card image cap"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">League of Legends</h5>
              <div className="row">
                <a href="#" class="btn btn-primary">
                  Matches
                </a>
                <a href="#" class="btn btn-primary">
                  Results
                </a>
              </div>
            </div>
          </div>

          <div className="card" style={{ margin: "auto" }}>
            <div style={{ height: "200px", width: "275px" }}>
              <img
                className="card-img-top"
                src={nrl_logo}
                alt="Card image cap"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">NRL</h5>
              <div className="row">
                <a href="#" class="btn btn-primary">
                  Matches
                </a>
                <a href="#" class="btn btn-primary">
                  Results
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
