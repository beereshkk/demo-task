import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const PieChart = (props) => {
  const { chartData } = props;

  const chartOptions = {
    colors: ['#03CC40', '#4693C8'],
    chart: {
      type: 'pie',
      height: 200,
      width: 200,
      margin: [0, 0, 0, 0],
    },
    title: {
      verticalAlign: '',
      floating: true,
      text: '',
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    },
    credits: {
      enabled: false,
    },
    legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
      padding: -13,
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    series: [
      {
        name: 'Share',
        colorByPoint: true,
        data: chartData,
        size: '80%',
        innerSize: '0%',
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};

export default PieChart;
