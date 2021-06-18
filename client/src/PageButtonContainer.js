import PreviousPageButton from "./PreviousPageButton";
import NextPageButton from "./NextPageButton";
import styled from "styled-components";

const StyledButtonContainer = styled.div`
  float: bottom;
  margin: 0 0 0 15%;
  width: 80%;
  height: 20px;
`;

const PageButtonContainer = ({ handlePageChange }) => {
  return (
    <StyledButtonContainer>
      <PreviousPageButton handlePageChange={handlePageChange} />
      <NextPageButton handlePageChange={handlePageChange} />
    </StyledButtonContainer>
  );
};

export default PageButtonContainer;
