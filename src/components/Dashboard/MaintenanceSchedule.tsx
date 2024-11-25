import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  Tooltip,
} from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  Cancel as CancelIcon,
  Schedule as ScheduleIcon,
  Person as PersonIcon,
  Build as BuildIcon,
} from '@mui/icons-material';

// Mock data - to be replaced with real schedule data
const scheduleData = [
  {
    id: 1,
    equipment: 'Locomotive Engine #1',
    task: 'Oil Filter Replacement',
    assignedTo: 'John Smith',
    scheduledDate: '2024-02-15',
    estimatedDuration: '2 hours',
    priority: 'high',
    status: 'pending',
  },
  {
    id: 2,
    equipment: 'Brake System A',
    task: 'Brake Pad Replacement',
    assignedTo: 'Sarah Johnson',
    scheduledDate: '2024-02-16',
    estimatedDuration: '3 hours',
    priority: 'medium',
    status: 'in-progress',
  },
  {
    id: 3,
    equipment: 'Track Sensor Unit 5',
    task: 'Sensor Calibration',
    assignedTo: 'Mike Brown',
    scheduledDate: '2024-02-14',
    estimatedDuration: '1 hour',
    priority: 'low',
    status: 'completed',
  },
];

const MaintenanceSchedule: React.FC = () => {
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircleIcon sx={{ color: '#4caf50' }} />;
      case 'in-progress':
        return <ScheduleIcon sx={{ color: '#ff9800' }} />;
      case 'pending':
        return <ScheduleIcon sx={{ color: '#757575' }} />;
      case 'cancelled':
        return <CancelIcon sx={{ color: '#f44336' }} />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'completed':
        return '#4caf50';
      case 'in-progress':
        return '#ff9800';
      case 'pending':
        return '#757575';
      case 'cancelled':
        return '#f44336';
      default:
        return '#757575';
    }
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Maintenance Schedule
      </Typography>
      <Card>
        <CardContent>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Equipment</TableCell>
                  <TableCell>Task</TableCell>
                  <TableCell>Assigned To</TableCell>
                  <TableCell>Scheduled Date</TableCell>
                  <TableCell>Duration</TableCell>
                  <TableCell>Priority</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {scheduleData.map((schedule) => (
                  <TableRow key={schedule.id}>
                    <TableCell>
                      <Typography variant="body2">{schedule.equipment}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">{schedule.task}</Typography>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <PersonIcon fontSize="small" />
                        <Typography variant="body2">{schedule.assignedTo}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">{schedule.scheduledDate}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">{schedule.estimatedDuration}</Typography>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={schedule.priority.toUpperCase()}
                        size="small"
                        sx={{
                          backgroundColor: getPriorityColor(schedule.priority),
                          color: 'white',
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Chip
                        icon={getStatusIcon(schedule.status)}
                        label={schedule.status.toUpperCase().replace('-', ' ')}
                        size="small"
                        sx={{
                          backgroundColor: getStatusColor(schedule.status),
                          color: 'white',
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <Tooltip title="View Details">
                          <IconButton size="small">
                            <BuildIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
};

export default MaintenanceSchedule;
