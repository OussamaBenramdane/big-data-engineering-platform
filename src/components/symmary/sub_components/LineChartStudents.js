import React from 'react';
// import the core library.
import ReactEChartsCore from 'echarts-for-react/lib/core';
// Import the echarts core module, which provides the necessary interfaces for using echarts.
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import {
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from 'echarts/components';
import {
  CanvasRenderer,
  // SVGRenderer,
} from 'echarts/renderers';

const LineChartStudents = ({ campusOrderdStudents }) => {
  const getStudentCountPerYear = () => {
    if (campusOrderdStudents) {
      for (const student in campusOrderdStudents) {
        //console.log(campusOrderdStudents[student].scolarship);
        for (let studyYear in campusOrderdStudents[student].scolarship) {
          console.log(studyYear);
        }
      }
    }
  };

  console.log(getStudentCountPerYear());
  console.log(campusOrderdStudents);

  const option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line',
      },
    ],
  };

  // Register the required components
  echarts.use([
    TooltipComponent,
    LineChart,
    CanvasRenderer,
    LegendComponent,
    GridComponent,
  ]);

  return (
    <div className='container-fluid'>
      <div className='row'>
        <h1>Students Over the years</h1>
      </div>
      <div className='row mt-4 pt-1'>
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
export default LineChartStudents;
