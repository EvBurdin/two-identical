import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    card: {
        'display': 'flex',
        'height': '100px',
        'width': '100px',
        'margin': '5px',
        'position': 'relative',
        'perspective': '1000px',
    },
    colorFull: {
        'display': 'flex',
        'flexWrap': 'wrap',
        'height': '100%',
        'width': '100%',
        'border-radius': '15px',
        'align-content': 'space-between',
        'justify-content': 'space-between',
    },
    colorHalf: {
        'height': '48%',
        'width': '48%',
        'border-radius': '5px',
    },
    backHide: {
        'transform': 'rotateY(180deg)'
    },
    backShow: {
        'transform': 'rotateY(360deg)'
    },
    frontHide: {
        'transform': 'rotateY(180deg)'
    },
    'front-back': {
        'position': 'absolute',
        'width': '100%',
        'height': '100%',
        'left': '0',
        'top': '0',
        'display': 'flex',
        'align-items': 'center',
        'transition': '1s',
        'backface-visibility': 'hidden',
        'border-radius': '10px',
    }
});