import { SELECT_INPUT_DATA } from 'src/data/SelectInputData';
import SelectInputStyled from './styles';
import PropTypes from 'prop-types';

const SelectInput = ({
  setIsSelecting,
  setFieldValue,
  setIsShowDropdown,
  name,
}) => {
  const onMouseOver = () => {
    setIsSelecting(true);
  };
  const onMouseLeave = () => {
    setIsSelecting(false);
  };

  const handleSelect = (value) => {
    setFieldValue(name, value);
    setIsShowDropdown(false);
    setIsSelecting(false);
  };

  return (
    <SelectInputStyled>
      <div className="pseudo-div"></div>
      <div className="data-dropdown">
        {SELECT_INPUT_DATA.map((item) => {
          return (
            <div
              className="data-item"
              key={item.key}
              onMouseOver={onMouseOver}
              onMouseLeave={onMouseLeave}
              onClick={() => handleSelect(item.value)}
            >
              {item.value}
            </div>
          );
        })}
      </div>
    </SelectInputStyled>
  );
};

SelectInput.propTypes = {
  setIsSelecting: PropTypes.func,
  setFieldValue: PropTypes.func,
  setIsShowDropdown: PropTypes.func,
  name: PropTypes.string,
};

export default SelectInput;
