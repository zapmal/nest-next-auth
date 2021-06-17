import { Grid, Paper, TextField, Typography, Button } from '@material-ui/core';

import { useStyles } from 'components/forms-styles';

const Signin = () => {
  const styles = useStyles();

  return (
    <form action='<route>' method='POST' onSubmit={() => {}}>
      <Paper elevation={4} className={styles.container}>
        <Typography variant='h5' style={{ marginBottom: '10px' }}>Create an account to test the auth</Typography>
        <Grid container justify='center' spacing={3}>
          <Grid item xs={10} className={styles.smallVerticalMargin}>
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
          <Grid item xs={10} className={styles.smallVerticalMargin}>
            <TextField
              fullWidth
              required
              variant='outlined'
              label='Username'
              type='text'
              name='username'
              color='secondary'
            />
          </Grid>
          <Grid item xs={10} className={styles.smallVerticalMargin}>
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
    </form>
  );
};

export default Signin;
