import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  LinearProgress,
  Chip,
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  TrendingFlat as TrendingFlatIcon,
} from '@mui/icons-material';

// Mock data - to be replaced with real anomaly data
const anomalyData = [
  {
    id: 1,
    equipment: 'Locomotive Engine #1',
    metric: 'Temperature',
    currentValue: 95,
    threshold: 85,
    severity: 'high',
    trend: 'increasing',
    description: 'Engine temperature exceeding normal operating range',
  },
  {
    id: 2,
    equipment: 'Brake System A',
    metric: 'Pressure',
    currentValue: 75,
    threshold: 90,
    severity: 'medium',
    trend: 'stable',
    description: 'Brake pressure below optimal level',
  },
  {
    id: 3,
    equipment: 'Track Sensor Unit 5',
    metric: 'Signal Strength',
    currentValue: 65,
    threshold: 60,
    severity: 'low',
    trend: 'decreasing',
    description: 'Signal strength approaching minimum threshold',
  },
];

const AnomalyDetection: React.FC = () => {
  const getSeverityColor = (severity: string): string => {
    switch (severity) {
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

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'increasing':
        return <TrendingUpIcon color="error" />;
      case 'decreasing':
        return <TrendingDownIcon color="success" />;
      default:
        return <TrendingFlatIcon color="action" />;
    }
  };

  const getProgressColor = (current: number, threshold: number): string => {
    const ratio = (current / threshold) * 100;
    if (ratio >= 100) return '#f44336';
    if (ratio >= 80) return '#ff9800';
    return '#4caf50';
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Anomaly Detection
      </Typography>
      <Grid container spacing={3}>
        {anomalyData.map((anomaly) => (
          <Grid item xs={12} md={6} lg={4} key={anomaly.id}>
            <Card>
              <CardContent>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" gutterBottom>
                    {anomaly.equipment}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                    <Chip
                      label={`${anomaly.severity.toUpperCase()} SEVERITY`}
                      size="small"
                      sx={{ backgroundColor: getSeverityColor(anomaly.severity), color: 'white' }}
                    />
                    <Chip
                      icon={getTrendIcon(anomaly.trend)}
                      label={anomaly.trend.toUpperCase()}
                      size="small"
                      variant="outlined"
                    />
                  </Box>
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                      {anomaly.metric}
                    </Typography>
                    <Typography variant="body2">
                      {anomaly.currentValue} / {anomaly.threshold}
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={(anomaly.currentValue / anomaly.threshold) * 100}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: '#e0e0e0',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: getProgressColor(anomaly.currentValue, anomaly.threshold),
                      },
                    }}
                  />
                </Box>

                <Typography variant="body2" color="text.secondary">
                  {anomaly.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AnomalyDetection;
