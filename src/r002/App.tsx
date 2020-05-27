import React, { useState } from "react";
import styled from "styled-components";
import { FlexCenterFlame } from "../components";

interface Props {
  red: number;
  blue: number;
  green: number;
  height: number;
  width: number;
  size: number;
}

const CustomBtn = styled.div<Props>`
  background: ${(p) => `rgb(${p.red}, ${p.blue}, ${p.green})`};
  width: ${(p) => p.width * 4 + "px"};
  height: ${(p) => p.height * 4 + "px"};
  border-radius: ${(p) => p.size + "px"};
  font-size: ${(p) => p.size + "px"};
  border: ${(p) => `${p.size}px solid`};
  &:hover {
    opacity: 0.9;
  }
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  /* make color order random like complementary color..ish on Purpose */
  color: ${(p) => `rgb(${p.green}, ${p.red}, ${p.blue})`};
`;

const App = () => {
  const icons = ["👨🏻‍🚀", "🐿", "🦀", "🧞‍♀️", "🐸"];
  const [icon, setIcon] = useState<string>("button");
  let red = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let height = Math.floor(Math.random() * 40 + 5);
  let width = Math.floor(Math.random() * 40 + 5);
  let size = Math.floor(Math.random() * 100);

  console.log(red);
  const handleClick = () => {
    let random = Math.floor(Math.random() * icons.length);
    setIcon(icons[random]);
  };

  return (
    <FlexCenterFlame>
      <CustomBtn
        red={red}
        blue={blue}
        green={green}
        onClick={handleClick}
        height={height}
        width={width}
        size={size}
      >
        {icon}
      </CustomBtn>
    </FlexCenterFlame>
  );
};

export default App;
