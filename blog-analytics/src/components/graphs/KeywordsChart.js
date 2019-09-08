import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

let dataPoints = [];
export default class KeywordsChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [],
        datasets: [
          {
            label: null,
            data: [],
            fill: true,
            backgroundColor: "#d346b1",
            borderColor: "#d346b1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#d346b1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#d346b1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                fontColor: "white"
              }
            }
          ],
          xAxes: [
            {
              ticks: {
                fontColor: "white"
              }
            }
          ]
        }
      }
    };
  }
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.keywords !== prevProps.keywords) {
      // console.log(this.props.keywords);
      let pairs = this.props.keywords;
      let labels = [];
      // console.log(pairs);
      for (var [key, value] of pairs) {
        labels.push(key);
        dataPoints.push(value);
      }
      // console.log("dataPoints");
      // console.log(dataPoints);

      if (labels) {
        // console.log("labels");
        // console.log(labels);
        this.setState(state => {
          return {
            chartData: {
              labels: labels,
              datasets: [
                {
                  label: "label!",
                  data: dataPoints,
                  fill: true,
                  backgroundColor: "#d346b1",
                  borderColor: "#d346b1",
                  borderWidth: 2,
                  borderDash: [],
                  borderDashOffset: 0.0,
                  pointBackgroundColor: "#d346b1",
                  pointBorderColor: "rgba(255,255,255,0)",
                  pointHoverBackgroundColor: "#d346b1",
                  pointBorderWidth: 20,
                  pointHoverRadius: 4,
                  pointHoverBorderWidth: 15,
                  pointRadius: 4
                }
              ]
            },
            options: {
              scales: {
                yAxes: [
                  {
                    ticks: {
                      fontColor: "white"
                    }
                  }
                ],
                xAxes: [
                  {
                    ticks: {
                      fontColor: "white"
                    }
                  }
                ]
              }
            }
          };
        });
        // this.checkData();
      }
    }
  }

  render() {
    let { chartData } = this.state;
    // console.log("labels");
    // console.log(this.state.chartData.labels);
    this.state.chartData.datasets.map(x => console.log(x));
    // console.log("chart data");
    // console.log(this.state.chartData);
    return (
      <div>
        <div class="card-body">
          <div class="chart-area">
            <Bar
              data={this.state.chartData}
              width={"100%"}
              height={"100%"}
              options={{ maintainAspectRatio: false }}
            />
          </div>
        </div>
      </div>
    );
  }
}
