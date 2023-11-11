import React from 'react';

function Rating({ selected, onClick }) {
  return (
    <span onClick={onClick} style={{ cursor: 'pointer' }}>
        {selected ? <i className="fa fa-star" style={{ cursor: 'pointer', color: "yellow" }}></i> : <i className="fa fa-star-o"></i>}
    </span>
  );
}

export default Rating;