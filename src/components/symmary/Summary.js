import React, { useEffect, useState } from 'react';
import PieChartStats from './sub_components/PieChartStats';
import LineChartStudents from './sub_components/LineChartStudents';
import BarChartStudents from './sub_components/BarChartStudents';
import { getStudentsByCampus } from '../../fireBase/queries';

const Summary = () => {
  const [studentsByCampus, setStudentsByCampus] = useState([]);

  useEffect(() => {
    if (getStudentsByCampus) {
      getStudentsByCampus().then((data) => setStudentsByCampus(data));
    }
  }, []);

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='customCard col-md-6'>
          <PieChartStats campusOrderdStudents={studentsByCampus} />
        </div>
        <div className='customCard col-md-6'>
          <LineChartStudents campusOrderdStudents={studentsByCampus} />
        </div>
      </div>
      <div className='row'>
        <div className='customCard col-md-12'>
          <BarChartStudents />
        </div>
      </div>
    </div>
  );
};

export default Summary;
