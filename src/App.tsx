import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";

import r001 from "./lab/r001/App";
import r002 from "./lab/r002/App";
import r003 from "./lab/r003/App";

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
          <Route exact path="/r003" component={r003} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
