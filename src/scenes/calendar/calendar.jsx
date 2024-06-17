import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import Header from '../../components/Header';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const Calendar = () => {
    const [events, setEvents] = useState([]);
    const [open, setOpen] = useState(false);
    const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '' });

    const handleAddEvent = () => {
        setEvents([...events, newEvent]);
        setOpen(false);
      };
    
      const handleOpenDialog = () => {
        setNewEvent({ title: '', start: '', end: '' });
        setOpen(true);
      };
    
      const handleCloseDialog = () => {
        setOpen(false);
      };
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEvent({ ...newEvent, [name]: value });
      };

    return (
        <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Calendario" subtitle="Bienvenido al Calendario de Actividades" />
        <Button variant="contained" color="primary" onClick={handleOpenDialog}>
          Añadir Evento
        </Button>
      </Box>
      <Box mt={4}>
        <BigCalendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </Box>

      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle>Añadir Nuevo Evento</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Título"
            name="title"
            fullWidth
            value={newEvent.title}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Fecha y Hora de Inicio"
            name="start"
            type="datetime-local"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            value={newEvent.start}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Fecha y Hora de Fin"
            name="end"
            type="datetime-local"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            value={newEvent.end}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handleAddEvent} color="primary">
            Añadir
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
    );
};

export default Calendar;
