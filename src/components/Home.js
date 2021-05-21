import React from "react";
import styled from "styled-components";
import Section from "./Section";
import Cars from "../json/cars.json";

function Home() {
  return (
    <Container>
      {Cars.map((car, index) => (
        <Section
          key={index}
          title={car.title}
          description={car.description}
          backgroundImg={car.backgroundImg}
          leftBtnText={car.leftBtnText}
          rightBtnText={car.rightBtnText}
        />
      ))}
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
