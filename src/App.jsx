import { Box, Stack, ThemeProvider, createTheme } from '@mui/material';
import Sidebar from './components/Sidebar';
import Rightbar from './components/Rightbar';
import Info from './components/Info';
import Navbar from './components/Navbar';
import Add from './components/Add';
import { useState } from 'react';
function App() {
  const [theme, setMode] = useState("light")
  const darkTheme = createTheme({
    palette: {
      mode: theme
    }
  })
  return (
      <ThemeProvider theme={darkTheme}>
        <Box bgcolor="background.default" color="text.primary" className="App">
          <Navbar />
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar setMode={setMode} newMode={theme} />
            <Info />
            <Rightbar />
          </Stack>
          <Add />
        </Box>
      </ThemeProvider>
  );
}

export default App;
