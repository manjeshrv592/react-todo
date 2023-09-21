import React, { useState } from 'react';

const filterButtons = [
  { text: 'All', value: 'all' },
  { text: 'Completed', value: 'completed' },
  { text: 'Pending', value: 'pending' },
];

const Filter = ({ stats }) => {
  const [activeBtn, setActiveBtn] = useState(0);

  return (
    <div className='filter'>
      {filterButtons.map((btn, i) => (
        <button
          className={`btn ${activeBtn === i && 'active'}`}
          key={i}
          onClick={() => setActiveBtn(i)}
        >
          {btn.text} <span>({stats[btn.value]})</span>
        </button>
      ))}
    </div>
  );
};

export default Filter;
