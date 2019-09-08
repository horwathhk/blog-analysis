import React, { Component, useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

let urls = [];

export default class Scraper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: ["row 1"],
      url: null,
      keywords: [],
      badWords: []
    };
    this.addRow = this.addRow.bind(this);
  }
  addRow = event => {
    let { rows, url } = this.state;
    rows.push("new row");
    this.setState({ rows: rows });
    url = this.state.url;
    urls.push(url);
  };
  submitForm = e => {
    e.preventDefault();
  };

  render() {
    let { rows, url } = this.state;
    return (
      <div>
        <div class="col-lg-12 col-md-12">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">URL Scraper</h4>
            </div>
            <div class="card-body">
              <form onSubmit={this.submitForm.bind(this)}>
                <div>
                  {rows.map(row => (
                    <div className="row">
                      <div class="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label id="exampleFormControlInput1">URL</label>
                          <input
                            type="text"
                            className="form-control"
                            id="email"
                            placeholder="ex: www.website.com"
                            onChange={e => {
                              this.setState({
                                url: e.target.value
                              });
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  class="btn btn-primary btn-simple"
                  onClick={this.addRow}
                >
                  Add URL
                </button>
                <div className="row">
                  <div class="col-lg-12 col-md-12 text-center">
                    <button
                      class="btn btn-primary btn-lg"
                      onClick={async () => {
                        let prom1 = await fetch("/keywords", {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json"
                          },
                          body: JSON.stringify(urls)
                        });
                        let prom2 = await fetch("/badWords", {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json"
                          },
                          body: JSON.stringify(urls)
                        });
                        prom1.json().then(data =>
                          this.setState(
                            { keywords: data.response },
                            function() {
                              this.props.getKeywords(this.state.keywords);
                            }
                          )
                        );
                        prom2.json().then(data =>
                          this.setState(
                            { badWords: data.response },
                            function() {
                              this.props.getBadWords(this.state.badWords);
                            }
                          )
                        );
                      }}
                    >
                      Webscrape And Analyze
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
