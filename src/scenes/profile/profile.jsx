import React from 'react';
import { Box, Typography, Avatar, Grid, Paper } from '@mui/material';
import Header from '../../components/Header';
import perfilImg from '../../assets/perfil.jpg';

const Profile = () => {
  const userProfile = {
    name: 'Jorge Sandova Santibáñez',
    id: '20214231-1',
    phone: '+56 9 66380250',
    email: 'jasandoval@ingelecsa.cl',
    address: 'Calle San Ignacio de Loyola, #824, Santiago',
    position: 'Técnico de Soporte'
  };

  return (
    <Box p={3}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Perfil" subtitle="Bienvenido al Perfil de usuario" />
      </Box>
      <Box mt={4}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4} lg={3} display="flex" justifyContent="center" alignItems="center">
              <Avatar
                alt={userProfile.name}
                src={perfilImg}
                sx={{ width: 150, height: 150 }}
              />
            </Grid>
            <Grid item xs={12} md={8} lg={9}>
              <Typography variant="h4" gutterBottom>{userProfile.name}</Typography>
              <Typography variant="body1"><strong>ID:</strong> {userProfile.id}</Typography>
              <Typography variant="body1"><strong>Teléfono:</strong> {userProfile.phone}</Typography>
              <Typography variant="body1"><strong>Correo Electrónico:</strong> {userProfile.email}</Typography>
              <Typography variant="body1"><strong>Domicilio:</strong> {userProfile.address}</Typography>
              <Typography variant="body1"><strong>Cargo:</strong> {userProfile.position}</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
};

export default Profile;