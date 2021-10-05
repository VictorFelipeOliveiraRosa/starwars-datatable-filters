import React, { useContext } from 'react';
import StarWarsContext from '../../provider/StarWarsContext';

function ShowFilterScreen() {
  const {
    filters: { filterByNumericValues },
    deleteFilter,
  } = useContext(StarWarsContext);
  return (
    <div className="m-1 d-flex justify-content__center align-items__center">
      { filterByNumericValues.map((el, index) => (
        <div data-testid="filter" key={ index } className="d-flex">
          <span>{ el.column }</span>
          <button
            onClick={ deleteFilter }
            data-column={ el.column }
            type="button"
          >
            X
          </button>
        </div>
      )) }
    </div>
  );
}

export default ShowFilterScreen;
