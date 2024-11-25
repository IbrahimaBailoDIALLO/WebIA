import React from 'react';
import { Box, Container, CssBaseline, ThemeProvider, createTheme, Grid } from '@mui/material';
import AnomalyDetection from './components/Dashboard/AnomalyDetection';
import MaintenancePrediction from './components/Dashboard/MaintenancePrediction';
import MaintenanceSchedule from './components/Dashboard/MaintenanceSchedule';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ my: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <AnomalyDetection />
            </Grid>
            <Grid item xs={12}>
              <MaintenancePrediction />
            </Grid>
            <Grid item xs={12}>
              <MaintenanceSchedule />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
