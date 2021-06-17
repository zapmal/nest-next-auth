import makeStyles from '@material-ui/core/styles/makeStyles';
import { styled, theme } from 'stitches';

const { '4': spaceFour, '5': spaceFive } = theme.space;

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: `${spaceFive} 10px`,
    width: '50%',
    margin: `${spaceFive} auto`,
    textAlign: 'center'
  },
  verticalMargin: {
    margin: '10px 0',
  },
  smallVerticalMargin: {
    margin: '5px 0'
  },
}));

export const Information = styled('p', {
  textAlign: 'center',
  paddingTop: '$1'
});