import React, { useState } from 'react';
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import { Navbar, Rightbar, Sidebar, Feed, Add } from './components';

function App() {

  const [mode, setMode] = useState('light');

  const appTheme = createTheme({
    palette: {
      mode: mode,
    }
  });

  return (
    <ThemeProvider theme={appTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar mode={mode} setMode={setMode} />
        <Stack direction='row' spacing={2} justifyContent='space-between'>
          <Sidebar mode={mode} setMode={setMode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  )
}

export default App