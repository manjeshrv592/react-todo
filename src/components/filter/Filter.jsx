import React, { useEffect, useState } from 'react';

const filterButtons = [
  { text: 'All', value: 'all' },
  { text: 'Completed', value: 'completed' },
  { text: 'Pending', value: 'pending' },
];

const Filter = ({ stats, onFilterBy, filterBy }) => {
  const [activeBtn, setActiveBtn] = useState(0);

  const handleClick = (value, i) => {
    // Change filter by value
    onFilterBy(value);

    // Change active button
    setActiveBtn(i);
  };

  useEffect(
    function () {
      const valueArr = filterButtons.map(btn => btn.value);
      const indexToBeActive = valueArr.indexOf(filterBy);
      setActiveBtn(indexToBeActive);
    },
    [filterBy]
  );

  return (
    <div className='filter'>
      {filterButtons.map((btn, i) => (
        <button
          className={`btn ${activeBtn === i && 'active'}`}
          key={i}
          onClick={() => handleClick(btn.value, i)}
        >
          {btn.text} <span>({stats[btn.value]})</span>
        </button>
      ))}
    </div>
  );
};

export default Filter;
