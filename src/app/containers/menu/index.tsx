import * as React from 'react';
import { useStyles } from './style';
import { IComplexity } from 'app/store/interface';
import { Store } from 'app/store/Store';

export const Menu = () => {
    const classes = useStyles();

    return (
        <div className={classes.box}>
            <div className={classes.card} onClick={()=>{Store.init(IComplexity.EASY)}}> EASY </div>
            <div className={classes.card} onClick={()=>{Store.init(IComplexity.NORMAL)}}> NORMAL </div>
            <div className={classes.card} onClick={()=>{Store.init(IComplexity.HARD)}}> HARD </div>
            <div className={classes.card} onClick={()=>{Store.init(IComplexity.INSANE)}}> INSANE </div>
        </div>
    )
}