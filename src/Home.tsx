import React from "react";
import { CustomLink } from "./components";

// import labData from "./db/lab.json";

// console.log(labData);

const Home: React.FC = () => {
  return (
    <div>
      <h1>REACTLAB</h1>
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/r001">R001</CustomLink>
      <CustomLink to="/r002">R002</CustomLink>
      <CustomLink to="/r003">R003</CustomLink>
    </div>
  );
};

export default Home;
