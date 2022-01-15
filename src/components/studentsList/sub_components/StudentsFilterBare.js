import React, { useEffect, useState } from 'react';

const StudentsFilterBare = ({
  studentsData,
  campuseValue,
  generalValue,
  regionValue,
  institutionValue,
  campus,
  region,
  institution,
}) => {
  //Search Presets
  const [campuses, setCampuse] = useState(new Set());
  const [regions, setRegions] = useState(new Set());
  const [institutions, setInstitutions] = useState(new Set());

  useEffect(() => {
    if (studentsData) {
      getCampuses();
      getRegions();
      getInstitution();
    }
  }, [studentsData]);

  const getCampuses = () => {
    const campuses = studentsData.map((data) => data.Campus);
    setCampuse([...new Set(campuses)]);
  };
  const getRegions = () => {
    const regions = studentsData.map((data) => data.regionOfOrigin);
    setRegions([...new Set(regions)]);
  };
  const getInstitution = () => {
    const institutions = studentsData.map((data) => data.institutionoforigin);
    setInstitutions([...new Set(institutions)]);
  };

  return (
    <div className='container mb-4'>
      <div className='row'>
        <div className='col-md-4'>
          <div className='input-group mb-3 '>
            <input
              type='text'
              className='form-control'
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby='button-addon2'
              onChange={(e) => generalValue(e.target.value)}
            />
            <button
              className='btn bg-transparent text-dark disabled border-info border-1 btn-lg'
              type='button'
              id='button-addon2'
            >
              <i className='fas fa-search'></i>
            </button>
          </div>
        </div>
        <div className='col-md-2'>
          <div className='dropdown'>
            <button
              className='btn bg-transparent text-dark border-info border-1 btn-lg dropdown-toggle w-100 '
              type='button'
              id='dropdownMenuButton1'
              data-bs-toggle='dropdown'
              aria-expanded='false'
              value='Input'
            >
              {campus.length > 15 ? campus.substring(0, 10) + '...' : campus}
            </button>
            <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
              {campuses &&
                Object.entries(campuses).map((key, index) => (
                  <li>
                    <a
                      className='dropdown-item'
                      onClick={(e) => campuseValue(e.target.innerText)}
                    >
                      {campuses[index]}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className='col-md-2'>
          <div className='dropdown'>
            <button
              className='btn bg-transparent text-dark border-info border-1 btn-lg dropdown-toggle  w-100'
              type='button'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              {region.length > 15 ? region.substring(0, 10) + '...' : region}
            </button>
            <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
              {campuses &&
                Object.entries(regions).map((key, index) => (
                  <li>
                    <a
                      className='dropdown-item'
                      onClick={(e) => regionValue(e.target.innerText)}
                    >
                      {regions[index]}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className='col-md-2'>
          <div className='dropdown'>
            <button
              className='btn bg-transparent text-dark border-info border-1 btn-lg dropdown-toggle  w-100'
              type='button'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              {institution.length > 15
                ? institution.substring(0, 10) + '...'
                : institution}
            </button>
            <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
              {campuses &&
                Object.entries(institutions).map((key, index) => (
                  <li key={key}>
                    <a
                      className='dropdown-item'
                      onClick={(e) => institutionValue(e.target.innerText)}
                    >
                      {institutions[index]}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className='col-md-2'>
          <button
            className='btn bg-transparent text-dark border-info border-1 btn-lg  w-100'
            type='button'
            data-bs-toggle='dropdown'
            aria-expanded='false'
            onClick={() => {
              regionValue('Region');
              campuseValue('Campus');
              institutionValue('Institution');
            }}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentsFilterBare;
