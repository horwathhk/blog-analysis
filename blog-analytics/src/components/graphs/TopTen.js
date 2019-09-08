import React, { Component, useEffect, useState } from "react";
import KeywordsChart from "./KeywordsChart";

export default class TopTen extends Component {
  render() {
    console.log("topten");
    console.log(this.props.keywords);
    return (
      <div>
        <div class="card card-chart">
          <div class="card-header ">
            <div class="row">
              <div class="col-sm-6 text-left">
                <h5 class="card-category">Keyword Analysis</h5>
                <h2 class="card-title">Content Clusters</h2>
              </div>
              <div class="col-sm-6">
                <div
                  class="btn-group btn-group-toggle float-right"
                  data-toggle="buttons"
                >
                  <label
                    class="btn btn-sm btn-primary btn-simple active"
                    id="0"
                  >
                    <input type="radio" name="options" checked />
                    <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                      Accounts
                    </span>
                    <span class="d-block d-sm-none">
                      <i class="tim-icons icon-single-02"></i>
                    </span>
                  </label>
                  <label class="btn btn-sm btn-primary btn-simple" id="1">
                    <input
                      type="radio"
                      class="d-none d-sm-none"
                      name="options"
                    />
                    <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                      Purchases
                    </span>
                    <span class="d-block d-sm-none">
                      <i class="tim-icons icon-gift-2"></i>
                    </span>
                  </label>
                  <label class="btn btn-sm btn-primary btn-simple" id="2">
                    <input type="radio" class="d-none" name="options" />
                    <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                      Sessions
                    </span>
                    <span class="d-block d-sm-none">
                      <i class="tim-icons icon-tap-02"></i>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <KeywordsChart keywords={this.props.keywords} />
        </div>
      </div>
    );
  }
}
