import React, { useState, useEffect } from 'react';
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
  const [studentsData, setStudentsData] = useState({});

  useEffect(() => {
    if (campusOrderdStudents) {
      getStudentCountPerYear();
    }
  }, []);

  const getStudentCountPerYear = () => {
    let dates = [];
    const count = {};

    let obj = {
      years: [],
      students: [],
    };
    let years = [];
    let studentsCount = [];

    for (const student in campusOrderdStudents) {
      Object.entries(campusOrderdStudents[student].scolarship).map((item) => {
        dates.push(item[1].year);
        return dates;
      });
    }
    console.log(dates);

    for (const element of dates) {
      if (count[element]) {
        count[element] += 1;
      } else {
        count[element] = 1;
      }
    }
    console.log(count);

    for (let obj in count) {
      years.push(obj);
      studentsCount.push(studentsCount[obj]);
    }

    console.log(obj);

    obj.years = years;
    obj.students = studentsCount;
    return setStudentsData(obj);
  };

  // const countOccurrences = () => {
  //   const count = {};

  //   for (const element of yearsCount) {
  //     if (count[element]) {
  //       count[element] += 1;
  //     } else {
  //       count[element] = 1;
  //     }
  //   }
  //   return setOccurrences(count);
  // };

  // const devideData = () => {
  //   let obj = {
  //     years: [],
  //     students: [],
  //   };
  //   let years = [];
  //   let count = [];
  //   for (let obj in occurrences) {
  //     years.push(obj);
  //     count.push(occurrences[obj]);
  //   }

  //   obj.years = years;
  //   obj.students = count;

  //   return setStudentsData(obj);
  // };
  console.log(studentsData);

  const option = {
    xAxis: {
      type: 'category',
      data: studentsData && studentsData.years,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: studentsData && studentsData.students,
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
