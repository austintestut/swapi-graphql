import { useState, useEffect } from "react";
import PreviousPageButton from "./PreviousPageButton";
import NextPageButton from "./NextPageButton";
import styled from "styled-components";

const StyledButtonContainer = styled.div`
  float: bottom;
  margin: 0 0 0 15%;
  width: 80%;
  height: 20px;
`;

const PageButtonContainer = ({ handlePageChange, people, translatedY }) => {
  const [nextButtonShowing, toggleNextButton] = useState(true);
  const [previousButtonShowing, togglePreviousButton] = useState(false);

  useEffect(() => {
    const pages = Math.floor(people.length / 10);
    const maxNextTranslation = pages * -600;
    console.log(translatedY);
    toggleNextButton(maxNextTranslation < translatedY ? true : false);
    togglePreviousButton(translatedY < 0 ? true : false);
  });

  return (
    <StyledButtonContainer>
      {previousButtonShowing && (
        <PreviousPageButton handlePageChange={handlePageChange} />
      )}
      {nextButtonShowing && (
        <NextPageButton handlePageChange={handlePageChange} />
      )}
    </StyledButtonContainer>
  );
};

export default PageButtonContainer;
