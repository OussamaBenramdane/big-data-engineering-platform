import React, { useEffect, useState } from 'react';
import ContractsBarChart from './sub_components/ContractsBarChart';
import ContractsPieChart from './sub_components/ContractsPieChart';
import CustomList from './sub_components/CustomList';

import { getStudentsByCampus } from '../../fireBase/queries';

const Statistics = () => {
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
          <CustomList studentsData={studentsByCampus} />
        </div>
        <div className='customCard col-md-6'>
          <ContractsPieChart campusOrderdStudents={studentsByCampus} />
        </div>
      </div>
      <div className='row'>
        <div className='customCard col-md-12'>
          <ContractsBarChart campusOrderdStudents={studentsByCampus} />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
