import React, { useEffect, useState } from 'react';
import { getStudents } from '../../fireBase/queries';
import StudentArray from './sub_components/StudentsArray';

const StudentsList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    if (getStudents) {
      getStudents().then((data) => setStudents(data));
    }
  }, []);

  console.log(students);
  return (
    <div className='container-fluid'>
      <StudentArray studentsData={students} />
    </div>
  );
};

export default StudentsList;
