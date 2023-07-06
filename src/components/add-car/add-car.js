import {
    Box,
    Button,
    Grid,
    MenuItem,
    TextField,
    Typography
} from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuBar from '../menu-bar/menu-bar';
import { useDispatch } from 'react-redux';
import { addCar } from '../../store/cars/cars-slice';

const AddCar = () => {
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [mileage, setMileage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCar = {
      id: new Date().getTime().toString(),
      manufacturer,
      model,
      year,
      fuelType,
      mileage,
    };

    dispatch(addCar(newCar)); // Auto zum Redux Store hinzufügen

    navigate('/');
  };

  return (
    <div>
      <MenuBar />
      <Typography variant='h6' sx={{ marginLeft: '20px', marginTop: '20px' }}>
        Add new car:
      </Typography>
      <Box
        component='form'
        onSubmit={handleSubmit}
        sx={{ display: 'grid', gap: 2, maxWidth: 400, margin: '0 auto' }}
      >
        <Grid container spacing={2} maxWidth={400} margin='0 auto'>
           <Grid item xs={6}>
            <TextField
              label='Manufacturer'
              type='text'
              value={manufacturer}
              onChange={(e) => setManufacturer(e.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label='Model'
              type='text'
              value={model}
              onChange={(e) => setModel(e.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label='Year of Construction'
              type='tel'
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              select
              label='Fuel Type'
              value={fuelType}
              onChange={(e) => setFuelType(e.target.value)}
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
              label='Mileage'
              type='tel'
              value={mileage}
              onChange={(e) => setMileage(e.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              fullWidth
            >
              Add Car
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AddCar;
