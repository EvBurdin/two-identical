import * as React from 'react';
import { useStyles } from './style';
import { observer } from 'mobx-react-lite';
import { Color } from './color';
import { Store } from '../../store/Store';

export const Card: React.FC<{ store: typeof Store, index: number }> = observer(({store, index }) => {
    const classes = useStyles()
    const card = store.cards[index];

    return (
        <div className={classes.card}>
            <div
                onClick={()=> { store.showCard(index) }}
                className={`${classes.colorFull} ${classes['front-back']} ${card.show ? classes.frontHide : ''}`}
                style={{ backgroundColor: 'rgb(191, 128, 64)' }}
            />
            <Color store={ store } index={ index }/>
        </div>
    )
})