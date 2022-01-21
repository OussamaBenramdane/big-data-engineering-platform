import React, { useEffect, useState } from 'react';
import { getStudents } from '../../fireBase/queries';
import Spinner from '../util/Spinner';
import StudentArray from './sub_components/StudentsArray';
import StudentsFilterBare from './sub_components/StudentsFilterBare';

const StudentsList = () => {
  const [students, setStudents] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  //Search Input Values
  const [generalValue, setGeneralValue] = useState('');
  const [campuseValue, setCampusValue] = useState('Campus');
  const [regionValue, setRegionValue] = useState('Region');
  const [institutionValue, setInstitutionValue] = useState('Institution');

  console.log(students);

  useEffect(() => {
    if (getStudents) {
      getStudents().then((data) => setStudents(data));
    }
  }, [campuseValue, regionValue, institutionValue]);

  useEffect(() => {
    if (students) {
      searchHandler();
    }
  }, [generalValue]);

  useEffect(() => {
    if (students) {
      campusFilterHandler();
    }
  }, [campuseValue]);
  useEffect(() => {
    if (students) {
      regionFilterHandler();
    }
  }, [regionValue]);

  useEffect(() => {
    if (students) {
      institutionFilterHndler();
    }
  }, [institutionValue]);

  const searchHandler = () => {
    if (generalValue !== '') {
      const newStudentList = students.filter((student) => {
        return Object.values(student)
          .join(' ')
          .toLowerCase()
          .includes(generalValue.toLowerCase());
      });
      setSearchResults(newStudentList);
    } else {
      setSearchResults(students);
    }
  };
  const campusFilterHandler = () => {
    if (campuseValue !== '') {
      const newStudentList = students.filter((student) => {
        return Object.values(student)
          .join(' ')
          .toLowerCase()
          .includes(campuseValue.toLowerCase());
      });
      setSearchResults(newStudentList);
    } else {
      setSearchResults(students);
    }
  };
  const regionFilterHandler = () => {
    if (regionValue !== '') {
      const newStudentList = students.filter((student) => {
        return Object.values(student)
          .join(' ')
          .toLowerCase()
          .includes(regionValue.toLowerCase());
      });
      setSearchResults(newStudentList);
    } else {
      setSearchResults(students);
    }
  };
  const institutionFilterHndler = () => {
    if (institutionValue !== '') {
      const newStudentList = students.filter((student) => {
        return Object.values(student)
          .join(' ')
          .toLowerCase()
          .includes(institutionValue.toLowerCase());
      });
      setSearchResults(newStudentList);
    } else {
      setSearchResults(students);
    }
  };

  return (
    <div className='customCard container-fluid'>
      <div className=' row'>
        <div className='col'>
          <h1>Students List</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <StudentsFilterBare
            studentsData={students}
            campuseValue={setCampusValue}
            generalValue={setGeneralValue}
            regionValue={setRegionValue}
            institutionValue={setInstitutionValue}
            campus={campuseValue}
            region={regionValue}
            institution={institutionValue}
          />
        </div>
      </div>
      {students.length === 0 ? (
        <Spinner />
      ) : (
        <div className='row'>
          <div className='col'>
            <StudentArray
              studentsData={searchResults.length < 1 ? students : searchResults}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentsList;
