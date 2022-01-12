import React from 'react';
import { Link } from 'react-router-dom';

const SideBare = () => {
  return (
    <div
      className='NavBare d-flex flex-column flex-shrink-0 bg-light'
      style={{ width: 4.5 + 'rem' }}
    >
      <Link
        to='/'
        className='d-block p-3 link-dark text-decoration-none'
        title='Icon-only'
        data-bs-toggle='tooltip'
        data-bs-placement='right'
      >
        <i class='fas fa-digital-tachograph'></i>
        <span className='visually-hidden'>Icon-only</span>
      </Link>
      <ul className='nav nav-pills nav-flush flex-column mb-auto text-center'>
        <li className='nav-item'>
          <Link
            to='/'
            className='nav-link py-3 border-bottom'
            aria-current='page'
            title='Home'
            data-bs-toggle='tooltip'
            data-bs-placement='right'
            onClick={(e) => console.log(e)}
          >
            <i class='fas fa-home'></i>
          </Link>
        </li>
        <li>
          <Link
            to='/analysis'
            className='nav-link py-3 border-bottom'
            title='Dashboard'
            data-bs-toggle='tooltip'
            data-bs-placement='right'
          >
            <i class='fas fa-tachometer-alt'></i>
          </Link>
        </li>
        <li>
          <Link
            to='summary'
            className='nav-link py-3 border-bottom'
            title='Orders'
            data-bs-toggle='tooltip'
            data-bs-placement='right'
          >
            <i class='fas fa-th-list'></i>
          </Link>
        </li>
        <li>
          <Link
            to='statistics'
            className='nav-link py-3 border-bottom'
            title='Products'
            data-bs-toggle='tooltip'
            data-bs-placement='right'
          >
            <i class='far fa-calendar-alt'></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default SideBare;
