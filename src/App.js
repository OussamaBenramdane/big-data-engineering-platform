import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBare from './components/navigation/SideBare';
import StudentList from './components/studentsList/StudentsList';
import Summary from './components/symmary/Summary';
import Statistics from './components/statisctics/Statistics';

function App() {
  return (
    <Router>
      <div className='App wrapper'>
        <div className='row me-0 p-0'>
          <div className='Navigation-col col-md-1'>
            <SideBare />
          </div>
          <div className='col-md-11'>
            <Routes>
              <Route path='/' element={<Summary />} />

              <Route path='/students' element={<StudentList />} />

              <Route path='/statistics' element={<Statistics />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
