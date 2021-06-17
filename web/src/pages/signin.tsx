import { Grid, Paper, TextField, Typography, Button } from '@material-ui/core';
import Highlight from 'components/Highlight';

import { useStyles, Information } from 'components/forms-styles';

const Signin = () => {
  const styles = useStyles();

  return (
    <form action='<route>' method='POST' onSubmit={() => {}}>
      <Paper elevation={4} className={styles.container}>
        <Typography variant='h5' style={{ marginBottom: '10px' }}>Login and test the Auth</Typography>
        <Grid container justify='center' spacing={3}>
          <Grid item xs={10} className={styles.verticalMargin}>
            <TextField
              fullWidth
              required
              variant='outlined'
              label='Email'
              type='email'
              name='email'
              color='secondary'
            />
          </Grid>
          <Grid item xs={10} className={styles.verticalMargin}>
            <TextField
              fullWidth
              required
              variant='outlined'
              label='Password'
              type='password'
              name='password'
              color='secondary'
            />
          </Grid>
        </Grid>
        <Button
          type='submit'
          variant='contained'
          color='secondary'
          className={styles.verticalMargin}
        >
          Submit
        </Button>
      </Paper>
      <Information>The CSRF token is stored in <Highlight>React Context</Highlight>.</Information>
    </form>
  );
};

export default Signin;
