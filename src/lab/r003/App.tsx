import React, { useState, useEffect } from "react";
import styled from "styled-components";

type Props = {
  positionX: number;
  positionY: number;
};

const PhotoFlame = styled.div<Props>`
  position: absolute;
  top: ${(p) => `${p.positionY}px`};
  right: ${(p) => `${p.positionX}px`};
`;

const Photo = () => {
  const [imgData, setImgData] = useState("");
  let positionX = Math.floor(Math.random() * window.innerWidth);
  let positionY = Math.floor(Math.random() * window.innerHeight);
  useEffect(() => {
    fetch("https://picsum.photos/200/300").then((response) =>
      setImgData(response.url)
    );
  }, []);
  return (
    <PhotoFlame positionX={positionX} positionY={positionY}>
      <img src={imgData} alt="randomimg" />
    </PhotoFlame>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const App = () => {
  return (
    <Container>
      <Photo />
      <Photo />
      <Photo />
      <Photo />
      <Photo />
      <Photo />
      <Photo />
    </Container>
  );
};

export default App;
