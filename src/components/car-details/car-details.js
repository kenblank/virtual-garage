import { Button, Card, CardContent, Typography, Grid } from '@mui/material';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import MenuBar from '../menu-bar/menu-bar';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const cars = useSelector((state) => state.cars);
  const car = cars.find((car) => car.id === id); // Finde das Auto basierend auf seiner ID

  if (!car) {
    return <p>Cardetails are loading...</p>;
  }

  return (
    <div>
      <MenuBar />

      <Card sx={{ maxWidth: 400, margin: '0 auto', mt: 4 }} data-testid="car-details-card">
        <CardContent>
          <Typography variant='h5' gutterBottom>
            {car.manufacturer} {car.model}
          </Typography>
          <Typography variant='body1' gutterBottom>
            Year of Construction: {car.year}
          </Typography>
          <Typography variant='body1' gutterBottom>
            Fuel type: {car.fuelType}
          </Typography>
          <Typography variant='body1' gutterBottom>
            Mileage: {car.mileage} km
          </Typography>
        </CardContent>
      </Card>
      <Grid container spacing={2} maxWidth={400} margin='0 auto'>
        <Grid item xs={6}>
          <Button variant='contained' component={Link} to='/' sx={{ mt: 2 }} data-testid="back-to-garage-button">
            Back to Garage
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant='contained'
            onClick={() => navigate(`/edit-car/${car.id}`)}
            sx={{ width: '162px', mt: 2 }} 
            data-testid="edit-car-button"
          >
            Edit Car
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default CarDetails;
