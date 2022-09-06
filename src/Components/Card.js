import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
`;

const CardBox = styled.div`
  width: 200px;
  height: 200px;
  background: blue;
  color: white;
  margin: 1em;
  padding: 1em;
`;

const Card = ( {results} ) => {
  return (
    <CardContainer>
      <CardBox>
        <h2> id </h2>
        <h1> Title </h1>
        <p> body </p>
      </CardBox>
    </CardContainer>
  );
};

export default Card;
