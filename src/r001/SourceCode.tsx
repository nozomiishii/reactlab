import React from "react";
import styled from "styled-components";

const srcCode = `
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Modal } from "../components";
import SourceCode from "./SourceCode";

const overgrow = keyframes\`
  0%{
    background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
  }
  100%{
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  }
\`;

const shake = keyframes\`
  0%{
    transform: scale(1) rotate(0deg);
  }
  50%{
    transform: scale(0.5) rotate(180deg);
  }
  100%{
    transform: scale(1.5) rotate(360deg);
  }
\`;

const Field = styled.div\`
  position: relative;
  width: 100vw;
  height: 100vh;
  animation: \${overgrow} 3s infinite alternate linear;
\`;

const Box = styled.div<{ size: number }>\`
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  user-select: none;
  span {
    display: inline-block;
    font-size: \${({ size }) => size + "rem"};
    animation: \${shake} 4s infinite linear both alternate;
  }
\`;

const Button = styled.div\`
  position: absolute;
  bottom: 50px;
  right: 50px;
  height: 80px;
  width: 80px;
  border: 3px solid #2e2a2e;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  background-image: radial-gradient(
    circle 248px at center,
    #16d9e3 0%,
    #30c7ec 47%,
    #46aef7 100%
  );
  &:hover {
    opacity: 0.9;
  }
\`;

const Container = styled.div\`
  display: flex;
\`;

const App = () => {
  const [count, setCount] = useState(3);
  const [displayCode, setDisplayCode] = useState(false);

  return (
    <>
      {/* <Modal title="React Lab" /> */}
      <Container>
        <Field onClick={() => setCount((prev) => prev + 1)}>
          <Box size={count}>
            <span role="img" aria-label="img">
              🦕
            </span>
          </Box>
        </Field>
        {displayCode && <SourceCode />}
      </Container>
      <Button onClick={() => setDisplayCode((prev) => !prev)}>
        {displayCode ? "✕" : "</>"}
      </Button>
    </>
  );
};

export default App;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: scroll;
`;

const SourceCode = () => {
  return (
    <Container>
      <pre className="prettyprint">
        <code>{srcCode}</code>
      </pre>
    </Container>
  );
};

export default SourceCode;
