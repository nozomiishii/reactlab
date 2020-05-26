(this.webpackJsonpreactlab=this.webpackJsonpreactlab||[]).push([[0],{23:function(n,e,t){n.exports=t(34)},34:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(19),i=t.n(o),c=t(2),l=t(3),u=t(13),s=t(1),d=t(8);function m(){var n=Object(c.a)(["\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  z-index: 100;\n  background: white;\n  display: ",";\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]);return m=function(){return n},n}l.b.div(m(),(function(n){return n.game?"none":"flex"}));function f(){var n=Object(c.a)(["\n  background: ",";\n  width: 80px;\n  height: 50px;\n  border-radius: 3px;\n  &:hover {\n    opacity: 0.9;\n  }\n  a {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    width: 100%;\n    text-decoration: none;\n    /* make color order random like complementary color..ish on Purpose */\n    color: ",";\n  }\n"]);return f=function(){return n},n}var p=l.b.div(f(),(function(n){return"rgb(".concat(n.red,", ").concat(n.blue,", ").concat(n.green,")")}),(function(n){return"rgb(".concat(n.green,", ").concat(n.red,", ").concat(n.blue,")")})),b=function(n){var e=n.to,t=n.children,r=Math.floor(255*Math.random()),o=Math.floor(255*Math.random()),i=Math.floor(255*Math.random());return a.a.createElement(p,{red:r,blue:o,green:i},a.a.createElement(u.b,{to:e},t))};function g(){var n=Object(c.a)(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]);return g=function(){return n},n}var h=l.b.div(g()),v=function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"REACTLAB"),a.a.createElement(b,{to:"/"},"Home"),a.a.createElement(b,{to:"/r001"},"R001"),a.a.createElement(b,{to:"/r002"},"R002"))};function x(){var n=Object(c.a)(["\n  width: 100%;\n  height: 100vh;\n  overflow: scroll;\n"]);return x=function(){return n},n}var y=l.b.div(x()),E=function(){return a.a.createElement(y,null,a.a.createElement("pre",{className:"prettyprint"},a.a.createElement("code",null,'\nimport React, { useState } from "react";\nimport styled, { keyframes } from "styled-components";\nimport { Modal } from "../components";\nimport SourceCode from "./SourceCode";\n\nconst overgrow = keyframes`\n  0%{\n    background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);\n  }\n  100%{\n    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);\n  }\n`;\n\nconst shake = keyframes`\n  0%{\n    transform: scale(1) rotate(0deg);\n  }\n  50%{\n    transform: scale(0.5) rotate(180deg);\n  }\n  100%{\n    transform: scale(1.5) rotate(360deg);\n  }\n`;\n\nconst Field = styled.div`\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n  animation: ${overgrow} 3s infinite alternate linear;\n`;\n\nconst Box = styled.div<{ size: number }>`\n  position: absolute;\n  z-index: 10;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  user-select: none;\n  span {\n    display: inline-block;\n    font-size: ${({ size }) => size + "rem"};\n    animation: ${shake} 4s infinite linear both alternate;\n  }\n`;\n\nconst Button = styled.div`\n  position: absolute;\n  bottom: 50px;\n  right: 50px;\n  height: 80px;\n  width: 80px;\n  border: 3px solid #2e2a2e;\n  border-radius: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  user-select: none;\n  background-image: radial-gradient(\n    circle 248px at center,\n    #16d9e3 0%,\n    #30c7ec 47%,\n    #46aef7 100%\n  );\n  &:hover {\n    opacity: 0.9;\n  }\n`;\n\nconst Container = styled.div`\n  display: flex;\n`;\n\nconst App = () => {\n  const [count, setCount] = useState(3);\n  const [displayCode, setDisplayCode] = useState(false);\n\n  return (\n    <>\n      {/* <Modal title="React Lab" /> */}\n      <Container>\n        <Field onClick={() => setCount((prev) => prev + 1)}>\n          <Box size={count}>\n            <span role="img" aria-label="img">\n              \ud83e\udd95\n            </span>\n          </Box>\n        </Field>\n        {displayCode && <SourceCode />}\n      </Container>\n      <Button onClick={() => setDisplayCode((prev) => !prev)}>\n        {displayCode ? "\u2715" : "</>"}\n      </Button>\n    </>\n  );\n};\n\nexport default App;\n')))};function j(){var n=Object(c.a)(["\n  display: flex;\n"]);return j=function(){return n},n}function k(){var n=Object(c.a)(["\n  position: absolute;\n  bottom: 50px;\n  right: 50px;\n  height: 80px;\n  width: 80px;\n  border: 3px solid #2e2a2e;\n  border-radius: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  user-select: none;\n  background-image: radial-gradient(\n    circle 248px at center,\n    #16d9e3 0%,\n    #30c7ec 47%,\n    #46aef7 100%\n  );\n  &:hover {\n    opacity: 0.9;\n  }\n"]);return k=function(){return n},n}function O(){var n=Object(c.a)(["\n  position: absolute;\n  z-index: 10;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  user-select: none;\n  span {\n    display: inline-block;\n    font-size: ",";\n    animation: "," 4s infinite linear both alternate;\n  }\n"]);return O=function(){return n},n}function w(){var n=Object(c.a)(["\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n  animation: "," 3s infinite alternate linear;\n"]);return w=function(){return n},n}function C(){var n=Object(c.a)(["\n  0%{\n    transform: scale(1) rotate(0deg);\n  }\n  50%{\n    transform: scale(0.5) rotate(180deg);\n  }\n  100%{\n    transform: scale(1.5) rotate(360deg);\n  }\n"]);return C=function(){return n},n}function z(){var n=Object(c.a)(["\n  0%{\n    background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);\n  }\n  100%{\n    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);\n  }\n"]);return z=function(){return n},n}var M=Object(l.c)(z()),S=Object(l.c)(C()),B=l.b.div(w(),M),F=l.b.div(O(),(function(n){return n.size+"rem"}),S),R=l.b.div(k()),A=l.b.div(j()),$=function(){var n=Object(r.useState)(3),e=Object(d.a)(n,2),t=e[0],o=e[1],i=Object(r.useState)(!1),c=Object(d.a)(i,2),l=c[0],u=c[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(A,null,a.a.createElement(B,{onClick:function(){return o((function(n){return n+1}))}},a.a.createElement(F,{size:t},a.a.createElement("span",{role:"img","aria-label":"img"},"\ud83e\udd95"))),l&&a.a.createElement(E,null)),a.a.createElement(R,{onClick:function(){return u((function(n){return!n}))}},l?"\u2715":"</>"))};function D(){var n=Object(c.a)(["\n  background: ",";\n  width: 80px;\n  height: 50px;\n  border-radius: 3px;\n  &:hover {\n    opacity: 0.9;\n  }\n  user-select: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  /* make color order random like complementary color..ish on Purpose */\n  color: ",";\n"]);return D=function(){return n},n}var J=l.b.div(D(),(function(n){return"rgb(".concat(n.red,", ").concat(n.blue,", ").concat(n.green,")")}),(function(n){return"rgb(".concat(n.green,", ").concat(n.red,", ").concat(n.blue,")")})),L=function(){var n=["\ud83d\udc68\ud83c\udffb\u200d\ud83d\ude80","\ud83d\udc3f","\ud83e\udd80","\ud83e\uddde\u200d\u2640\ufe0f","\ud83d\udc38"],e=Object(r.useState)("button"),t=Object(d.a)(e,2),o=t[0],i=t[1];return a.a.createElement(h,null,a.a.createElement(J,{red:44,blue:56,green:222,onClick:function(){var e=Math.floor(Math.random()*n.length);i(n[e])}},o))};function P(){var n=Object(c.a)(["\n  *{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n"]);return P=function(){return n},n}var H=Object(l.a)(P());var I=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(H,null),a.a.createElement(u.a,null,a.a.createElement(s.c,null,a.a.createElement(s.a,{exact:!0,path:"/",component:v}),a.a.createElement(s.a,{exact:!0,path:"/reactlab",component:v}),a.a.createElement(s.a,{exact:!0,path:"/r001",component:$}),a.a.createElement(s.a,{exact:!0,path:"/r002",component:L}))))};i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(I,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.6bca85d9.chunk.js.map