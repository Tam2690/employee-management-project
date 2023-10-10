import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import ShowDropdownIconStyled from "./styles";
import PropTypes from "prop-types";

const ShowDropdownIcon = ({ isShowDropdown }) => {
  return (
    <ShowDropdownIconStyled>
      {!isShowDropdown ? <FaAngleDown /> : <FaAngleUp />}
    </ShowDropdownIconStyled>
  );
};

ShowDropdownIcon.propTypes = {
  isShowDropdown: PropTypes.bool,
};

export default ShowDropdownIcon;
