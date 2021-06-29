import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Grid, Paper, TextField, Typography, Button } from '@material-ui/core';
import Highlight from 'components/Highlight';

import { useStyles, Information } from 'components/forms-styles';

import { useAuth } from 'context/AuthContext';

import apiService from '../services/api';

const Signin = () => {
  const [fields, setField] = useState({});
  const [message, setMessage] = useState('');

  const router = useRouter();
  const styles = useStyles();
  const { state } = useAuth();
  
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    const config = {
      headers: {
        'X-CSRF-Token': state.csrfToken,
      }
    };
    
    try {
      const response = await apiService.post('/signin', fields, config);
      setMessage(response.data.message);
      
      router.push('/');
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setField({
      ...fields,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
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
      {message 
        ? <Information>{message}</Information>
        : <Information>The CSRF token is stored in <Highlight>React Context</Highlight>.</Information>
      }
    </form>
  );
};

export default Signin;
