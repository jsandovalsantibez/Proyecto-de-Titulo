import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Header from "../../components/Header";

const tasksData = [
    { activity: 'Inspección de Extintores', worker: 'Juan Carlos Yusti' },
    { activity: 'Revisión de Sistemas de Rociadores', worker: 'Juan Carlos Yusti' },
    { activity: 'Mantenimiento de Alarmas de Incendio', worker: 'Jorge Sandoval Santibáñez' },
    { activity: 'Prueba de Sistemas de Detección de Humo', worker: 'Felipe Uribe' },
    { activity: 'Revisión de Puertas Cortafuegos', worker: 'Kevin Muñoz' },
  ];

const Tasks = () => {
    return (
        <Box>
            <Box display= "flex" justifyContent = "space-between" alignItems="center">
                <Header title="Asignación de Tareas" subtitle="Bienvenido a la plataforma de asignación de tareas"/>
            </Box>
            <Box mt={4}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Actividad</TableCell>
                <TableCell>Trabajador Asociado</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tasksData.map((task, index) => (
                <TableRow key={index}>
                  <TableCell>{task.activity}</TableCell>
                  <TableCell>{task.worker}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
        </Box>
        
    );
};

export default Tasks;
