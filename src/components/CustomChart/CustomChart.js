import React, { Component } from "react";
import { Line } from "react-chartjs-2";

export class LineDemo extends Component {
  render() {
    return (
      <div>
        <Line
          ref="chart"
          data={{
            labels: this.props.selectedCrypto.priceHistory.chartLabels,

            datasets: [
              {
                label: "Precio de cierre (USD)",

                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: this.props.selectedCrypto.priceHistory.chartData
              }
            ]
          }}
          options={{
            tooltips: {
              callbacks: {
                label: function(tooltipItem, data) {
                  var label =
                    data.datasets[tooltipItem.datasetIndex].label || "";

                  if (label) {
                    label += ": ";
                  }
                  label += "$" + Math.round(tooltipItem.yLabel * 100) / 100;
                  return label;
                }
              }
            },
            scales: {
              xAxes: [
                {
                  ticks: {
                    maxTicksLimit: 10.2,
                    autoSkip: true
                  }
                }
              ],
              yAxes: [
                {
                  ticks: {
                    maxTicksLimit: 5,
                    autoSkip: true,
                    callback: function(label, index, labels) {
                      return label.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD"
                      });
                    }
                  }
                }
              ]
            }
          }}
        />
      </div>
    );
  }
}

export default LineDemo;
