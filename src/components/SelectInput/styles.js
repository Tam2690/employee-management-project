import styled from "styled-components";

const SelectInputStyled = styled.div`
  outline: none;
  position: relative;
  z-index: 99;

  .pseudo-div {
    width: 20px;
    height: 20px;
    background-color: black;
    position: absolute;
    transform: rotate(45deg);
    top: 4px;
    left: 30px;
    z-index: 1;
  }

  .data-dropdown {
    position: absolute;
    border: 1px solid #80808085;
    color: rgba(223, 230, 233, 1);
    background-color: black;
    border-radius: 10px;
    width: 100%;
    top: 8px;
    padding: 10px 15px;

    &:hover {
    }

    .data-item {
      padding: 5px 10px;
      transition: all 0.3s;
      position: relative;
      z-index: 3;

      &:hover {
        cursor: pointer;
        background: rgba(99, 110, 114, 1);
        border-radius: 10px;
        transition: all 0.3s;
      }
    }
  }
`;

export default SelectInputStyled;
