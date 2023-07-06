import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, TextField, Button, Box, Grid, MenuItem } from '@mui/material';
import MenuBar from '../menu-bar/menu-bar';
import { useSelector, useDispatch } from 'react-redux';
import { updateCar } from '../../store/cars/cars-slice';

const EditCar = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars);
  const car = cars.find((car) => car.id === id); // Finde das Auto basierend auf seiner ID

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedCar = {
      ...car,
      manufacturer: e.target.manufacturer.value,
      model: e.target.model.value,
      year: e.target.year.value,
      fuelType: e.target.fuelType.value,
      mileage: e.target.mileage.value,
    };

    // Auto im Redux Store aktualisieren
    dispatch(updateCar(updatedCar));

    navigate(`/car/${id}`);
  };

  if (!car) {
    return <p>Cardetails are loading...</p>;
  }

  return (
    <div>
      <MenuBar />
      <Typography variant="h6" sx={{ marginLeft: '20px', marginTop: '20px' }}>
        Edit Car:
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'grid', gap: 2, maxWidth: 400, margin: '0 auto' }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Manufacturer"
              name="manufacturer"
              type="text"
              defaultValue={car.manufacturer}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Model"
              name="model"
              type="text"
              defaultValue={car.model}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Year of Construction"
              name="year"
              type="tel"
              defaultValue={car.year}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              select
              label='Fuel Type'
              name="fuelType"
              type="text"
              defaultValue={car.fuelType}
              required
              fullWidth
            >
              <MenuItem value='Diesel'>Diesel</MenuItem>
              <MenuItem value='Petrol'>Petrol</MenuItem>
              <MenuItem value='Electro'>Electro</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Mileage"
              name="mileage"
              type="tel"
              defaultValue={car.mileage}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Save changes
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default EditCar;
