import React from 'react';
import Aux from '../../hoc/Aux';
import styles from './Layout.module.css';

export default function Layout(props) {
  return (
    <Aux>
      <div>Toolbar, SideDrawer,Backgrop</div>
      <main class={styles.Content}>{props.children}</main>
    </Aux>
  );
}
