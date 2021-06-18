import styled from "styled-components";

const StyledPreviousButton = styled.button`
  margin-left: 10px;
  background-color: transparent;
  color: white;
  border: none;
  height: 24px;
  font-size: 20px;
  &:hover {
    cursor: pointer;
    color: #01144d;
  }
`;

const PreviousPageButton = () => {
  return <StyledPreviousButton type="button">Previous 10</StyledPreviousButton>;
};

export default PreviousPageButton;
