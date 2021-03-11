import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      justifyContent: 'space-between',
      flexDirection: 'row',
    }
  }),
);

export default useStyles;