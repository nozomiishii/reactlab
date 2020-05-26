import styled from "styled-components";

const RandomColorBtn = styled.div<{ red: number; blue: number; green: number }>`
  background: ${(p) => `rgb(${p.red}, ${p.blue}, ${p.green})`};
  width: 80px;
  height: 50px;
  border-radius: 3px;
  &:hover {
    opacity: 0.9;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    text-decoration: none;
    /* make color order random like complementary color..ish on Purpose */
    color: ${(p) => `rgb(${p.green}, ${p.red}, ${p.blue})`};
  }
`;

export default RandomColorBtn;
