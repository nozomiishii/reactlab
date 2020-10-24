import React, { useEffect, useRef } from "react";

const App = () => {
  const firstEl = useRef<HTMLInputElement>(null);
  const secondEl = useRef<HTMLInputElement>(null);
  const goalEl = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (firstEl.current) {
      firstEl.current.focus();
    }
  }, []);
  return (
    <div>
      <h1>r004</h1>
      <input type="text" ref={firstEl} />
      <input type="text" ref={secondEl} />
      <button ref={goalEl}>GOAL</button>
    </div>
  );
};
export default App;
