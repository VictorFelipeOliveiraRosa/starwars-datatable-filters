import React from 'react';
import PropTypes from 'prop-types';

function TableBody({ contentRow }) {
  const renderTd = (rows) => {
    const result = Object.entries(rows).map(([key, value], index) => {
      if (key === 'films' || key === 'url') {
        return (
          <td className="m-1 bg-dark" key={ index }>
            <a target="_blank" rel="noreferrer" href={ value }>
              Link
            </a>
          </td>
        );
      }
      if (key === 'name') {
        return (
          <td className="m-1 bg-dark" data-testid="planet-name" key={ index }>
            {value}
          </td>
        );
      }
      return <td className="m-1 bg-dark" key={ index }>{value}</td>;
    });
    return result;
  };

  return (
    <tbody>
      {contentRow.map((el, index) => (
        <tr key={ index }>{renderTd(el)}</tr>
      ))}
    </tbody>
  );
}

TableBody.propTypes = {
  contentRow: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TableBody;
