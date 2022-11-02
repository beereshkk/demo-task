import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import * as Bullet from 'highcharts/modules/bullet.js';
Bullet(Highcharts);

const BulletGraph = (props) => {
  const { data, titleText } = props;

  const options = {
    chart: {
      inverted: true,
      marginLeft: 10,
      type: 'bullet',
      height: 130,
      width: 190,
    },
    title: {
      text: titleText,
      align: 'left',
    },
    legend: {
      enabled: false,
    },

    yAxis: {
      max: 100,
      gridLineWidth: 0,
      plotBands: [
        {
          from: 0,
          to: 50,
          color: '#35DC7E',
        },
        {
          from: 50,
          to: 75,
          color: '#FFDB00',
        },
        {
          from: 75,
          to: 100,
          color: '#FF3600',
        },
      ],
    },
    plotOptions: {
      series: {
        pointPadding: 0.25,
        borderWidth: 0,
        color: '#fff',
        targetOptions: {
          width: '100%',
        },
      },
    },
    credits: {
      enabled: false,
    },
    exporting: {
      enabled: false,
    },
    series: [
      {
        data: data,
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default BulletGraph;
