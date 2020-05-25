import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>LAB T</h1>
      <Link to="/">Home</Link>
      <Link to="/r001">R001</Link>
    </div>
  );
};

export default Home;
