import React, { Component } from "react";

export default class BadWords extends Component {
  render() {
    console.log("from badwords");
    let wordItems;
    let pairs = this.props.badWords;
    let table;
    if (pairs) {
      wordItems = pairs.map((word, index) => (
        <tr key={index}>
          <td>{word[0]}</td>
          <td>{word[1]}</td>
        </tr>
      ));
    }

    console.log(wordItems);

    return (
      <div>
        <div class="card ">
          <div class="card-header">
            <h4 class="card-title">Bad Words</h4>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table tablesorter " id="">
                <thead class=" text-primary">
                  <tr>
                    <th>Bad Words</th>
                    <th>Frequency</th>
                    {/* <th>City</th>
                    <th class="text-center">Salary</th> */}
                  </tr>
                </thead>
                <tbody>{wordItems}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
