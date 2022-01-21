import React, { useState, useEffect } from 'react';

const CustomList = ({ studentsData }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (studentsData) {
      filterData();
    }
  }, [studentsData]);
  const filterData = () => {
    const students = [];
    for (const iterator of studentsData) {
      if ('M.ENG.2' in iterator.scolarship) {
        students.push(iterator);
      }
    }
    console.log(students);
    return setData(students.slice(0, 10));
  };
  return (
    <div className='container-fluid '>
      <h1>Students who stopped thier studies</h1>
      <table className='table table-dark table-hover'>
        <thead>
          <tr>
            <th scope='col'>Student Name</th>
            <th scope='col'>Campus</th>
            <th scope='col'>Origin institution</th>
          </tr>
        </thead>

        <tbody>
          {data.map((student, key) => (
            <tr key={key}>
              <th>{student.studentname}</th>
              <th>{student.Campus}</th>
              <th>{student.institutionoforigin}</th>
            </tr>
          ))}
        </tbody>
      </table>
      <nav aria-label='Page navigation example'>
        <ul className='pagination'>
          <li className='page-item'>
            <a className='page-link' href='#'>
              Previous
            </a>
          </li>
          <li className='page-item'>
            <a className='page-link' href='#'>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default CustomList;
