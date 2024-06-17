import React from 'react';
import { Box } from '@mui/material';
import Header from '../../components/Header';

const tasks = [
  { name: 'Planificación', start: '2024-06-01', end: '2024-06-07', progress: 25 },
  { name: 'Diseño', start: '2024-06-08', end: '2024-06-14', progress: 50 },
  { name: 'Desarrollo', start: '2024-06-15', end: '2024-06-21', progress: 75 },
  { name: 'Pruebas', start: '2024-06-22', end: '2024-06-28', progress: 100 },
];

const GanttChart = () => {
  const calculateWidth = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const diffTime = Math.abs(endDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays * 20; // 20px por día
  };

  const calculateOffset = (start) => {
    const startDate = new Date(start);
    const firstDate = new Date(tasks[0].start);
    const diffTime = Math.abs(startDate - firstDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays * 20; // 20px por día
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Carta Gantt" subtitle="Bienvenido al apartado de Carta Gantt de proyectos" />
      </Box>
      <Box mt={4} p={2} border={1} borderColor="grey.300">
        <div className="gantt-chart">
          {tasks.map((task, index) => (
            <div key={index} className="gantt-task">
              <div className="gantt-task-info">
                <span>{task.name}</span>
                <span>{task.start} - {task.end}</span>
              </div>
              <div
                className="gantt-task-bar"
                style={{
                  width: `${calculateWidth(task.start, task.end)}px`,
                  marginLeft: `${calculateOffset(task.start)}px`,
                }}
              >
                <div className="gantt-task-progress" style={{ width: `${task.progress}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </Box>
    </Box>
  );
};

const styles = `
  .gantt-chart {
    position: relative;
    width: 100%;
    height: auto;
    background: #f5f5f5;
    padding: 10px;
    border-radius: 5px;
  }
  .gantt-task {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }
  .gantt-task-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }
  .gantt-task-bar {
    position: relative;
    height: 20px;
    background: #e0e0e0;
    border-radius: 3px;
  }
  .gantt-task-progress {
    height: 100%;
    background: #76c7c0;
    border-radius: 3px 0 0 3px;
  }
`;

const Gantt = () => (
  <>
    <style>{styles}</style>
    <GanttChart />
  </>
);

export default Gantt;
