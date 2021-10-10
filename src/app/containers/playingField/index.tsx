import * as React from 'react';
import { useStyles } from './style';
import { Store } from 'app/store/Store';
import { Card } from 'app/components/card';

export const PlayingField = () => {
    const classes = useStyles();

    return (
        <div className={classes.box}>
            {Store.getCardsIndexes().map((i, index) =>
                <div key={`line-${index}`} className={classes.lineBox}>
                    {i.map((line, lineIndex) =>
                        <Card key={`card-${lineIndex}`} store={Store} index={line}/>
                    )}
                </div>)}
        </div>
    )
}