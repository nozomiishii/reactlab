import React, { useState } from "react";
import styled from "styled-components";
import { FlexCenterFlame } from "../components";

const CustomBtn = styled.div<{ red: number; blue: number; green: number }>`
  background: ${(p) => `rgb(${p.red}, ${p.blue}, ${p.green})`};
  width: 80px;
  height: 50px;
  border-radius: 3px;
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

  const handleClick = () => {
    let random = Math.floor(Math.random() * icons.length);
    setIcon(icons[random]);
  };

  return (
    <FlexCenterFlame>
      <CustomBtn red={44} blue={56} green={222} onClick={handleClick}>
        {icon}
      </CustomBtn>
    </FlexCenterFlame>
  );
};

export default App;
