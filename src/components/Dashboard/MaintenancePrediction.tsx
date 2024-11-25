import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
} from '@mui/material';
import {
  Warning as WarningIcon,
  Build as BuildIcon,
  Timer as TimerIcon,
  ErrorOutline as ErrorOutlineIcon,
} from '@mui/icons-material';

// Mock data - to be replaced with real prediction data
const predictionData = [
  {
    id: 1,
    equipment: 'Locomotive Engine #1',
    failureProbability: 75,
    estimatedDowntime: '4 hours',
    priority: 'high',
    recommendations: [
      'Replace oil filter',
      'Check cooling system',
      'Inspect fuel injectors',
    ],
    timeToFailure: '48 hours',
  },
  {
    id: 2,
    equipment: 'Brake System A',
    failureProbability: 45,
    estimatedDowntime: '2 hours',
    priority: 'medium',
    recommendations: [
      'Replace brake pads',
      'Check hydraulic fluid',
      'Test brake response',
    ],
    timeToFailure: '96 hours',
  },
  {
    id: 3,
    equipment: 'Track Sensor Unit 5',
    failureProbability: 25,
    estimatedDowntime: '1 hour',
    priority: 'low',
    recommendations: [
      'Clean sensor unit',
      'Calibrate sensors',
      'Update firmware',
    ],
    timeToFailure: '168 hours',
  },
];

const MaintenancePrediction: React.FC = () => {
  const getPriorityColor = (priority: string): string => {
    switch (priority) {
      case 'high':
        return '#f44336';
      case 'medium':
        return '#ff9800';
      case 'low':
        return '#4caf50';
      default:
        return '#757575';
    }
  };

  const getFailureProbabilityColor = (probability: number): string => {
    if (probability >= 70) return '#f44336';
    if (probability >= 40) return '#ff9800';
    return '#4caf50';
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Maintenance Predictions
      </Typography>
      <Grid container spacing={3}>
        {predictionData.map((prediction) => (
          <Grid item xs={12} md={6} lg={4} key={prediction.id}>
            <Card>
              <CardContent>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" gutterBottom>
                    {prediction.equipment}
                  </Typography>
                  <Chip
                    label={`${prediction.priority.toUpperCase()} PRIORITY`}
                    size="small"
                    sx={{ backgroundColor: getPriorityColor(prediction.priority), color: 'white' }}
                  />
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                      Failure Probability
                    </Typography>
                    <Typography variant="body2">
                      {prediction.failureProbability}%
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={prediction.failureProbability}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: '#e0e0e0',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: getFailureProbabilityColor(prediction.failureProbability),
                      },
                    }}
                  />
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <TimerIcon color="action" fontSize="small" />
                    <Typography variant="body2">
                      Time to Failure: {prediction.timeToFailure}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <ErrorOutlineIcon color="action" fontSize="small" />
                    <Typography variant="body2">
                      Estimated Downtime: {prediction.estimatedDowntime}
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="subtitle2" gutterBottom>
                  Recommended Actions:
                </Typography>
                <List dense>
                  {prediction.recommendations.map((recommendation, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <BuildIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText
                        primary={recommendation}
                        primaryTypographyProps={{ variant: 'body2' }}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MaintenancePrediction;
