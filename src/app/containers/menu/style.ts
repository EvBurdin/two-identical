import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    card: {
        'display': 'flex',
        'height': '100px',
        'width': '100px',
        'margin': '5px',
        backgroundColor: 'rgb(191, 128, 64)',
        'justify-content': 'center',
        'align-items': 'center',
        'font-weight': '900',
        'font-family': 'monospace',
        'font-size': '20px',
        'color': 'white',
        'border-radius': '15px',
        'cursor': 'pointer'
    },
    box: {
        'display': 'flex',
        'flex-direction': 'column',
        'align-items': 'center',
        'justify-content': 'center',
        'height': '100vh',
    }
});