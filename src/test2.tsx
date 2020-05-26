import React from "react";

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  ok?: boolean;
  i?: number;
  fn?: () => void;
  person?: Person;
}

const TextField: React.FC<Props> = () => {
  return (
    <div>
      <input type="text" />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div>
      <TextField text="sample" />
    </div>
  );
};
