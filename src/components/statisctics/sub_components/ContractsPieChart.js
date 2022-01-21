import React, { useState, useEffect } from 'react';
// import the core library.
import ReactEChartsCore from 'echarts-for-react/lib/core';
// Import the echarts core module, which provides the necessary interfaces for using echarts.
import * as echarts from 'echarts/core';
import { PieChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from 'echarts/components';
import {
  CanvasRenderer,
  // SVGRenderer,
} from 'echarts/renderers';

const ContractsPieChart = ({ campusOrderdStudents }) => {
  const [studentsData, setStudentsData] = useState([]);

  useEffect(() => {
    if (campusOrderdStudents) {
      filterDat();
    }
  }, [campusOrderdStudents]);

  campusOrderdStudents && console.log(campusOrderdStudents);

  const filterDat = () => {
    const pieChartData = [
      { value: 0, name: 'SUPINFO PARIS' },
      { value: 0, name: 'SUPINFO LILLE' },
      { value: 0, name: 'SUPINFO LYON' },
    ];

    for (const student of campusOrderdStudents) {
      if (student.Campus === 'SUPINFO PARIS') {
        for (const key in student.scolarship) {
          if (student.scolarship[key].contract != undefined)
            pieChartData[0].value++;
        }
      } else if (student.Campus === 'SUPINFO LILLE') {
        for (const key in student.scolarship) {
          if (student.scolarship[key].contract != undefined)
            pieChartData[1].value++;
        }
      } else if (student.Campus === 'SUPINFO LYON') {
        for (const key in student.scolarship) {
          if (student.scolarship[key].contract != undefined)
            pieChartData[2].value++;
        }
      }
    }

    return setStudentsData(pieChartData);
  };

  const option = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: studentsData && studentsData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };

  // Register the required components
  echarts.use([
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    PieChart,
    CanvasRenderer,
  ]);

  return (
    <div className='container'>
      <div className='row'>
        <h1>Contracts per region</h1>
      </div>
      <div className='row'>
        <ReactEChartsCore
          echarts={echarts}
          option={option}
          lazyUpdate={true}
          style={{
            height: '50vh',
            top: 30,
            borderRadius: '30%',
          }}
        />
      </div>
    </div>
  );
};
export default ContractsPieChart;
