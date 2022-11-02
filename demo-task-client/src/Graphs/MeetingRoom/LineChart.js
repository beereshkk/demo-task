import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const LineChart = (props) => {
  let t = 10;
  const arr = new Array(20).fill(1);
  const data = arr.map((ele, i) => [t + i, Math.ceil(Math.random() * 10)]);

  const options = {
    chart: {
      width: 400,
      height: 300,
    },
    rangeSelector: {
      selected: 1,
    },
    title: {
      text: '',
    },
    series: [
      {
        name: 'Occupancy',
        data: data,
        tooltip: {
          valueDecimals: 2,
        },
      },
    ],
  };

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
};

export default LineChart;
