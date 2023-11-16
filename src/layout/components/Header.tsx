import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';

const MyComponent: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link to='/'  className='text-[#fff] cursor-pointer' >
            <Typography variant="h5">My Album</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default MyComponent;