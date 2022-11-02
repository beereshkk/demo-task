import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const DonutChart = (props) => {
  const chartOptions = {
    colors: props.colors,
    chart: {
      type: "pie",
      height: 300,
      width: 135,
      margin: [0, 0, 0, 0],
    },
    title: {
      verticalAlign: "",
      floating: true,
      text: "",
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "top",
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          distance: -40,
          y: -5,
          format: "{y}%",
          style: {
            fontWeight: "bold",
            color: "black",
            fontSize: "14px",
          },
          filter: {
            property: "name",
            operator: "===",
            value: "share",
          },
        },
        showInLegend: false,
      },
    },
    series: [
      {
        data: props.chartData,
        size: "70%",
        innerSize: "60%,",
      },
    ],
  };
  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};

export default DonutChart;
