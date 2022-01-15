import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBare from './components/navigation/SideBare';
import StudentList from './components/studentsList/StudentsList';
import Summary from './components/landingPages/Summary';
import Analysis from './components/landingPages/Analysis';
import Statistics from './components/landingPages/Statistics';

function App() {
  return (
    <Router>
      <div className='App wrapper'>
        <div className='row'>
          <div className='Navigation-col col-md-1'>
            <SideBare />
          </div>
          <div className='col-md-11'>
            <Routes>
              <Route path='/' element={<StudentList />} />

              <Route path='/statistics' element={<Statistics />} />

              <Route path='/summary' element={<Summary />} />

              <Route path='/analysis' element={<Analysis />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
