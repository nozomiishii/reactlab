import React, { useRef } from "react";
import styled from "styled-components";
import { TweenMax, TimelineLite, Power3 } from "gsap";

type Props = {
  positionX: number;
  positionY: number;
};

const PhotoFlame = styled.div<Props>`
  position: absolute;
  top: ${(p) => `${p.positionY}px`};
  right: ${(p) => `${p.positionX}px`};
`;

const Photo: React.FC = () => {
  let randomId = Math.floor(Math.random() * 100);
  let photoId = `https://picsum.photos/id/${randomId}/200/300`;
  let positionX = Math.floor(Math.random() * window.innerWidth);
  let positionY = Math.floor(Math.random() * window.innerHeight);
  return (
    <PhotoFlame positionX={positionX} positionY={positionY}>
      <img src={photoId} alt="random" />
    </PhotoFlame>
  );
};

const Container = styled.div`
  visibility: hidden;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 60px;
`;

const App: React.FC = () => {
  let app = useRef(null);
  let photo1 = useRef<HTMLHeadingElement>(null);
  let photo2 = useRef<HTMLHeadingElement>(null);
  let photo3 = useRef<HTMLHeadingElement>(null);
  let photo4 = useRef<HTMLHeadingElement>(null);
  let photo5 = useRef<HTMLHeadingElement>(null);
  let photo6 = useRef<HTMLHeadingElement>(null);
  let photo7 = useRef<HTMLHeadingElement>(null);
  console.log(photo1);
  let tl = new TimelineLite();

  const handleClick = () => {
    TweenMax.to(app, 0, { css: { visibility: "visible" } });
    tl.staggerFrom(
      [photo1, photo2, photo3, photo4, photo5, photo6, photo7],
      1,
      {
        y: 44,
        ease: Power3.easeOut,
        delay: 0.8,
      },
      0.15
    );
  };

  return (
    <>
      <Container ref={(el: any) => (app = el)}>
        <div ref={(el: any) => (photo1 = el)}>
          <Photo />
        </div>
        <div ref={(el: any) => (photo2 = el)}>
          <Photo />
        </div>
        <div ref={(el: any) => (photo3 = el)}>
          <Photo />
        </div>
        <div ref={(el: any) => (photo4 = el)}>
          <Photo />
        </div>
        <div ref={(el: any) => (photo5 = el)}>
          <Photo />
        </div>
        <div ref={(el: any) => (photo6 = el)}>
          <Photo />
        </div>
        <div ref={(el: any) => (photo7 = el)}>
          <Photo />
        </div>
      </Container>
      <Button onClick={handleClick}>Click!</Button>
    </>
  );
};

export default App;
