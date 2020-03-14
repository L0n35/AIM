import React from "react";
import { Header } from "./header";

export class Root extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <Header />
          </div>
        </div>
        <div className="row">
          <div>{this.props.children}</div>
        </div>
      </div>
    );
  }
}
