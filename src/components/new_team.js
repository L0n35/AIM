import React, { Component } from "react";

export class newTeam extends React.Component {
  render() {
    return (
      <div>
        <h2>ADD NEW TEAM</h2>

        <form>
          <div class="row">
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Team Name"
                id="team1name"
              />
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Team Logo Image Link"
                id="team1link"
              />
            </div>
          </div>

          <button
            type="button"
            class="btn btn-success submit"
            id="submit-match"
          >
            SUBMIT
          </button>
          <br />
        </form>
      </div>
    );
  }
}
