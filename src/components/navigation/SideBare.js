import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

const SideBare = () => {
  /**
   *Jquery Function To Set the Active Attribut on The Active class
   */
  $(document).ready(function () {
    $('a').click(function (e) {
      $('a').removeClass('active');
      $(this).addClass('active');
    });
  });

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
        <i className='fas fa-digital-tachograph'></i>
        <span className='visually-hidden'>Icon-only</span>
      </Link>
      <ul className='nav nav-pills nav-flush flex-column mb-auto text-center'>
        <li className='nav-item'>
          <Link
            to='/'
            className='nav-link py-3 border-bottom active'
            aria-current='page'
            title='Home'
            data-bs-toggle='tooltip'
            data-bs-placement='right'
            onClick={(e) => console.log(e)}
          >
            <i className='fas fa-home'></i>
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            to='students'
            className='nav-link py-3 border-bottom'
            title='Orders'
            data-bs-toggle='tooltip'
            data-bs-placement='right'
          >
            <i className='fas fa-th-list'></i>
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            to='statistics'
            className='nav-link py-3 border-bottom'
            title='Products'
            data-bs-toggle='tooltip'
            data-bs-placement='right'
          >
            <i className='far fa-calendar-alt'></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default SideBare;
