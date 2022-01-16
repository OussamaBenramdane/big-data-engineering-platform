import React from 'react';
// import the core library.
import ReactEChartsCore from 'echarts-for-react/lib/core';
// Import the echarts core module, which provides the necessary interfaces for using echarts.
import * as echarts from 'echarts/core';
import { PieChart } from 'echarts/charts';
import { TooltipComponent, LegendComponent } from 'echarts/components';
import {
  CanvasRenderer,
  // SVGRenderer,
} from 'echarts/renderers';

const PieChartStats = ({ campusOrderdStudents }) => {
  const filterDat = () => {
    const pieChartData = [
      { value: 0, name: 'SUPINFO PARIS' },
      { value: 0, name: 'SUPINFO LILLE' },
      { value: 0, name: 'SUPINFO LYON' },
    ];

    for (const student of campusOrderdStudents) {
      if (student.Campus === 'SUPINFO PARIS') {
        pieChartData[0].value++;
      } else if (student.Campus === 'SUPINFO LILLE') {
        pieChartData[1].value++;
      } else if (student.Campus === 'SUPINFO LYON') {
        pieChartData[2].value++;
      }
    }
    return pieChartData;
  };

  const option = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      top: '5%',
      left: 'center',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2,
        },
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '20',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: filterDat && filterDat(),
      },
    ],
  };

  // Register the required components
  echarts.use([TooltipComponent, PieChart, CanvasRenderer, LegendComponent]);

  return (
    <div className='container-fluid'>
      <div className='row'>
        <h1>Students per campuse</h1>
      </div>
      <div className='row'>
        <ReactEChartsCore
          echarts={echarts}
          option={option}
          notMerge={true}
          lazyUpdate={true}
          theme={'dark'}
          style={{
            height: '40vh',
            top: 30,
            width: '90vw',
            borderRadius: '30%',
          }}
        />
      </div>
    </div>
  );
};
export default PieChartStats;
