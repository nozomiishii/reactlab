import React from "react";
import { Link } from "react-router-dom";
import RandomColorBtn from "./RandomColorBtn";

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

export default CustomLink;
