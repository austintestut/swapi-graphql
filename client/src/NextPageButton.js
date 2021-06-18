import styled from "styled-components";

const StyledNextButton = styled.button`
  float: right;
  margin-right: 10px;
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

const NextPageButton = ({ handlePageChange, checkButtons }) => {
  return (
    <StyledNextButton
      type="button"
      onClick={() => {
        handlePageChange("next");
      }}
    >
      Next Page
    </StyledNextButton>
  );
};

export default NextPageButton;
