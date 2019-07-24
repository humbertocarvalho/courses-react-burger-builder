import React from 'react';
import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const constrols = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

export default function BuildControls() {
  return (
    <div className={styles.BuildControls}>
      {constrols.map(ctrl => {
        return <BuildControl key={ctrl.label} label={ctrl.label} />;
      })}
    </div>
  );
}
