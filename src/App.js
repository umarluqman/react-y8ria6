import React from 'react';
import './style.css';
import mecha from './mecha.json';

export default function App() {
  const wingGhostRare = [
    'Wing_1_BLUE',
    'Wing_1_CARBON',
    'Wing_1_CHROME',
    'Wing_1_PURPLE',
    'Wing_1_SILVER',
    'Wing_2_CARBON',
    'Wing_2_CHROME',
    'Wing_2_PURPLE',
    'Wing_2_RED',
  ];

  const armFrontGhostRare = [
    'Blaster_CARBON',
    'Blaster_CHROME',
    'Blaster_PURPLE',
    'Blaster_WHITE',
    'Blaster_SILVER',
    'Blaster_RED',
    'Sword_PURPLE',
    'Destroyed_RED',
    'Destroyed_BLUE',
    'Destroyed_SILVER',
  ];

  const armBackGhostRare = [
    'Sword_PURPLE',
    'Blaster_MATTE',
    'Blaster_PURPLE',
    'Blaster_WHITE',
    'Blaster_SILVER',
    'Blaster_RED',
    'Destroyed_RED',
    'Destroyed_CHROME',
    'Destroyed_WHITE',
  ];
  const armor = ['Battle_PURPLE', 'Battle_GOLD'];

  const allTraits = [
    ...armBackGhostRare,
    ...armFrontGhostRare,
    ...armor,
    ...wingGhostRare,
  ];

  const all = mecha.results.filter(({ attributes }) => {
    return attributes
      .map(({ value }) => {
        return value;
      })
      .some((value) => allTraits.includes(value));
  });

  // const inDigitalEyes = mechaDigitalEyes.offers.filter(
  //   ({ metadata: { attributes } }) => {
  //     return attributes
  //       .map(({ value }) => {
  //         return value;
  //       })
  //       .includes('Wing_1_CARBON');
  //   }
  // );

  console.log({ all });

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
