import React from 'react';
import Spinner from '../util/Spinner';

const Analysis = () => {
  return (
    <div className='container-fluid'>
      <h1>Analysis</h1>
      <div class='dropdown'>
        <a
          class='btn btn-secondary dropdown-toggle'
          href='#'
          role='button'
          id='dropdownMenuLink'
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          Dropdown link
        </a>

        <ul class='dropdown-menu' aria-labelledby='dropdownMenuLink'>
          <li>
            <a class='dropdown-item' href='#'>
              Action
            </a>
          </li>
          <li>
            <a class='dropdown-item' href='#'>
              Another action
            </a>
          </li>
          <li>
            <a class='dropdown-item' href='#'>
              Something else here
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Analysis;
