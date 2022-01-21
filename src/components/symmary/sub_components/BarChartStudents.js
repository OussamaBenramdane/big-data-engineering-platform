import React from 'react';
// import the core library.
import ReactEChartsCore from 'echarts-for-react/lib/core';
// Import the echarts core module, which provides the necessary interfaces for using echarts.
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import {
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from 'echarts/components';
import {
  CanvasRenderer,
  // SVGRenderer,
} from 'echarts/renderers';

const BarChartStudents = ({ campusOrderdStudents }) => {
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
      trigger: 'axis',
      axisPointer: {
        // Use axis to trigger tooltip
        type: 'shadow', // 'shadow' as default; can also be 'line' or 'shadow'
      },
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
    },
    yAxis: {
      type: 'category',
      data: ['SUPINFO PARIS', 'SUPINFO LILLE', 'SUPINFO LYON'],
    },
    series: [
      {
        name: '0-49 %',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
        },
        emphasis: {
          focus: 'series',
        },
        data: [2, 3, 3],
      },
      {
        name: '50-59 %',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
        },
        emphasis: {
          focus: 'series',
        },
        data: [34, 40, 44],
      },
      {
        name: '60-69 %',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
        },
        emphasis: {
          focus: 'series',
        },
        data: [22, 18, 19],
      },
      {
        name: '70-79 %',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
        },
        emphasis: {
          focus: 'series',
        },
        data: [15, 21, 20],
      },
      {
        name: '80-100 %',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
        },
        emphasis: {
          focus: 'series',
        },
        data: [7, 9, 6],
      },
    ],
  };

  // Register the required components
  echarts.use([
    TooltipComponent,
    GridComponent,
    LegendComponent,
    BarChart,
    CanvasRenderer,
  ]);

  return (
    <div className='container'>
      <div className='row'>
        <h1>Students grades range</h1>
      </div>
      <div className='row'>
        <ReactEChartsCore
          echarts={echarts}
          option={option}
          notMerge={true}
          lazyUpdate={true}
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
export default BarChartStudents;
