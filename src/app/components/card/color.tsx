import * as React from 'react';
import { useStyles } from './style';
import { observer } from 'mobx-react-lite';
import { Store } from '../../store/Store';

export const Color: React.FC<{ store: typeof Store, index: number }> = observer(({store, index}) => {
    const classes = useStyles();
    const card = store.cards[index];

    return (
        <div className={`${classes.colorFull} ${classes['front-back']} ${card.show ? classes.backShow : classes.backHide}`}>
            {
                card.colors.map((i, ii) =>
                    <div
                        key={`color-${ii}`}
                        style={{ backgroundColor: i }}
                        className={card.colors.length > 1 ? classes.colorHalf : classes.colorFull}
                    />
                )
            }
        </div>
    )
})