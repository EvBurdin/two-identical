import * as React from 'react';
import { PlayingField } from './containers/playingField';
import { Menu } from './containers/menu'
import './index.css'
import { Store } from './store/Store';
import { observer } from 'mobx-react-lite';

// render react DOM
export const App = observer(({}) => {

  return (
    <>
    {
      Store.menuOpen
        ? <Menu/>
        : <PlayingField/>
    }
    </>
  );
});
