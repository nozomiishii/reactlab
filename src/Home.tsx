import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import labData from "./db/lab.json";

// console.log(labData);

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
    color: ${(p) => `rgb( ${p.blue}, ${p.green}, ${p.red})`};
  }
`;

interface Props {
  to: string;
}
const CustomLink: React.FC<Props> = ({ to, children }) => {
  let red = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  return (
    <RandomColorBtn red={red} blue={blue} green={green}>
      <Link to={to}>{children}</Link>
    </RandomColorBtn>
  );
};

const Home: React.FC = () => {
  return (
    <div>
      <h1>REACTLAB</h1>
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/r001">R001</CustomLink>
      <CustomLink to="/r002">R002</CustomLink>
    </div>
  );
};

export default Home;
