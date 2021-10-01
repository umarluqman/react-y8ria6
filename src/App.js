import React from 'react';
import './style.css';
import mecha from './mecha.json';

export default function App() {
  const rareOne = mecha.results.filter(({ attributes }) => {
    return attributes
      .map(({ value }) => {
        return value;
      })
      .includes('Wing_1_CARBON');
  });

  console.log({ rareOne });

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
