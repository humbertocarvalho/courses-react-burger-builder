import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import styles from './Burger.module.css';

export default function Burger(props) {
  return (
    <div className={styles.Burger}>
      <BurgerIngredient type='bread-top' />
      <BurgerIngredient type='cheese' />
      <BurgerIngredient type='meate' />
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
}
