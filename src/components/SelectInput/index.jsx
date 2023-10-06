import React from 'react';
import { SELECT_INPUT_DATA } from 'src/data/SelectInputData';
import SelectInputStyled from './styles';

const SelectInput = () => {
  return (
    <SelectInputStyled>
      <div className="pseudo-div"></div>
      <div className="data-dropdown">
        {SELECT_INPUT_DATA.map((item) => {
          return (
            <div className="data-item" key={item.key}>
              {item.value}
            </div>
          );
        })}
      </div>
    </SelectInputStyled>
  );
};

export default SelectInput;
