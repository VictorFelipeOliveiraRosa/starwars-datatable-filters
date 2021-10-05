import React from 'react';
import InputNamePlanet from '../InputNamePlanet';
import SelectNumericValues from '../SelectNumericValues';
import ShowFilterScreen from '../ShowFilterScreen';
import OrderColumn from '../OderColumn';

function SearchBar() {
  return (
    <div className="d-flex m-1 justify-content__center">
      <InputNamePlanet />
      <SelectNumericValues />
      <ShowFilterScreen />
      <OrderColumn />
    </div>
  );
}

export default SearchBar;
