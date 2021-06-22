import React, { useState } from 'react';
import { Grid, Paper, TextField, Typography, Button } from '@material-ui/core';
import Highlight from 'components/Highlight';

import { useStyles, Information } from 'components/forms-styles';

import { useCsrf, withCsrf } from 'context/CsrfContext';

const Signin = () => {
  const styles = useStyles();
  const [field, setField] = useState({});
  const { state, dispatch } = useCsrf();
  
  React.useEffect(() => { console.log(state)}, [state]);

  const handleSubmit = (event: React.FormEvent) => {
    dispatch({ type: 'SET_CSRF', payload: 'lmao' });
    event.preventDefault();
  };
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setField({
      ...field,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form action='<route>' method='POST' onSubmit={handleSubmit}>
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
              onChange={handleChange}
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
              onChange={handleChange}
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
