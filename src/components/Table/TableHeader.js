import React from 'react';
import PropTypes from 'prop-types';

function TableHeader({ nameColumn }) {
  return (
    <thead>
      <tr>
        { nameColumn.map((el, index) => (
          <th className="m-1 bg-dark" key={ index }>{ el }</th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;

TableHeader.propTypes = {
  nameColumn: PropTypes.arrayOf(PropTypes.string).isRequired,
};
