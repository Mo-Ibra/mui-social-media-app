import React from 'react';
import { Box, Stack } from '@mui/material';
import { Navbar, Rightbar, Sidebar, Feed } from './components';

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction='row' spacing={2} justifyContent='space-between'>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  )
}

export default App