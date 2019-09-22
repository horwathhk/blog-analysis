import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

export default class Links extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        type: "pie",
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
    if (this.props.links !== prevProps.links) {
      console.log("links!");
      console.log(this.props.links);
      let dataPoints = this.props.links;

      if (dataPoints) {
        // console.log("labels");
        // console.log(labels);
        this.setState(state => {
          return {
            chartData: {
              labels: ["Internal", "External"],
              datasets: [
                {
                  //   label: "label!",
                  data: dataPoints,
                  fill: true,
                  backgroundColor: ["#d346b1", "white"],
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
    return (
      <div>
        <div class="card ">
          <div class="card-header">
            <h4 class="card-title">Links Analysis</h4>
          </div>
          <div class="card-body">
            <Pie
              data={this.state.chartData}
              // width={"100%"}
              // height={"100%"}
              // options={{ maintainAspectRatio: false }}
            />
          </div>
        </div>
      </div>
    );
  }
}
