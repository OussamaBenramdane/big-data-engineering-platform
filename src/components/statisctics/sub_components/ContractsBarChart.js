import React, { useState, useEffect } from 'react';
// import the core library.
import ReactEChartsCore from 'echarts-for-react/lib/core';
// Import the echarts core module, which provides the necessary interfaces for using echarts.
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  DataZoomComponent,
} from 'echarts/components';
import {
  CanvasRenderer,
  // SVGRenderer,
} from 'echarts/renderers';

const ContractsBarChart = ({ campusOrderdStudents }) => {
  const [studentsData, setStudentsData] = useState({});

  useEffect(() => {
    if (campusOrderdStudents) {
      getStudentCountPerYear();
    }
  }, [campusOrderdStudents]);

  campusOrderdStudents && console.log(campusOrderdStudents);

  const getStudentCountPerYear = () => {
    let companies = [];
    const count = {};

    let obj = {
      years: [],
      students: [],
    };

    let years = [];
    let studentsCount = [];

    for (const student in campusOrderdStudents) {
      Object.entries(campusOrderdStudents[student].scolarship).map((item) => {
        companies.push(item[1].contract.company);
        return companies;
      });
    }
    console.log(companies);

    for (const element of companies) {
      if (count[element]) {
        count[element] += 1;
      } else {
        count[element] = 1;
      }
    }
    console.log(count);

    for (let obj in count) {
      years.push(obj);
      studentsCount.push(count[obj]);
    }

    console.log(obj);

    obj.years = years;
    obj.students = studentsCount;
    return setStudentsData(obj);
  };

  const option = {
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: false,
        },
        saveAsImage: {
          pixelRatio: 2,
        },
      },
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      bottom: 90,
    },
    dataZoom: [
      {
        type: 'inside',
      },
      {
        type: 'slider',
      },
    ],
    xAxis: {
      type: 'category',
      data: studentsData?.years,
      silent: false,
    },
    yAxis: {
      splitArea: {
        show: false,
      },
    },
    series: [
      {
        type: 'bar',
        data: studentsData?.students,
      },
    ],
  };
  // Register the required components
  echarts.use([
    TitleComponent,
    ToolboxComponent,
    TooltipComponent,
    GridComponent,
    DataZoomComponent,
    BarChart,
    CanvasRenderer,
  ]);

  return (
    <div className='container'>
      <div className='row'>
        <h1>Most contracts per companie</h1>
      </div>
      <div className='row'>
        <ReactEChartsCore echarts={echarts} option={option} lazyUpdate={true} />
      </div>
    </div>
  );
};
export default ContractsBarChart;
