import PreviousPageButton from "./PreviousPageButton";
import NextPageButton from "./NextPageButton";
import styled from "styled-components";

const StyledButtonContainer = styled.div`
  float: bottom;
  margin: 0 0 0 15%;
  width: 80%;
  height: 20px;
`;

const PageButtonContainer = () => {
  return (
    <StyledButtonContainer>
      <PreviousPageButton />
      <NextPageButton />
    </StyledButtonContainer>
  );
};

export default PageButtonContainer;
