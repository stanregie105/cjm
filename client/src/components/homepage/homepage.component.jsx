import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

class HomePage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-12 col-md-6">Welcome home</div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(HomePage);
