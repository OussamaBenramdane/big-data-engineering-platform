import React from 'react';
import Spinner from '../../util/Spinner';

const StudentArray = ({ studentsData }) => {
  return (
    <div className='container-fluid '>
      <table class='table table-dark table-hover'>
        <thead>
          <tr>
            <th scope='col'>Student Name</th>
            <th scope='col'>Campus</th>
            <th scope='col'>Mail adress</th>
            <th scope='col'>Fhone number</th>
            <th scope='col'>Reajon of origin</th>
            <th scope='col'>Origin institution</th>
            <th scope='col'>Scolarship</th>
          </tr>
        </thead>
        {studentsData ? (
          <tbody>
            {studentsData &&
              studentsData.map((student) => (
                <tr>
                  <th>{student.studentname}</th>
                  <th>{student.Campus}</th>
                  <th>{student.mailaddress}</th>
                  <th>{student.phonenumber}</th>
                  <th>{student.regionOfOrigin}</th>
                  <th>{student.institutionoforigin}</th>
                  <th>
                    <button className='btn btn-info'>Grades</button>
                  </th>
                </tr>
              ))}
          </tbody>
        ) : (
          <Spinner />
        )}
      </table>
    </div>
  );
};
export default StudentArray;
