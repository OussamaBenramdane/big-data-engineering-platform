import React from 'react';

const StudentArray = ({ studentsData }) => {
  return (
    <div className='container-fluid '>
      <table className='table table-dark table-hover'>
        <thead>
          <tr>
            <th scope='col'>Student Name</th>
            <th scope='col'>Campus</th>
            <th scope='col'>Mail adress</th>
            <th scope='col'>Fhone number</th>
            <th scope='col'>Reajon of origin</th>
            <th scope='col'>Origin institution</th>
          </tr>
        </thead>

        <tbody>
          {studentsData.map((student, key) => (
            <tr key={key}>
              <th>{student.studentname}</th>
              <th>{student.Campus}</th>
              <th>{student.mailaddress}</th>
              <th>{student.phonenumber}</th>
              <th>{student.regionOfOrigin}</th>
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
export default StudentArray;
