import React from 'react';
import './ExpenseFilter.css';

const ExpenseFilter = ({ onFilterByYear, selected }) => {
  const filterByYearHandler = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    onFilterByYear(e.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={selected} onChange={filterByYearHandler}>
          {/* <option value='select year'>select year</option> */}
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
