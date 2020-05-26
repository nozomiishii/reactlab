import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import r001 from "./r001/App";
import r002 from "./r002/App";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/reactlab" component={Home} />
          <Route exact path="/r001" component={r001} />
          <Route exact path="/r002" component={r002} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
