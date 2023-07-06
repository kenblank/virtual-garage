import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MenuBar from '../menu-bar/menu-bar';
import { useSelector, useDispatch } from 'react-redux';
import { removeCar } from '../../store/cars/cars-slice';

const Garage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars);

  // Filterfunktion für die Suche
  const filteredCars = Array.isArray(cars)
    ? cars.filter(
        (car) =>
          car.manufacturer.toLowerCase().includes(searchTerm.toLowerCase()) ||
          car.model.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const handleRemove = (id) => {
    // Auto im Redux Store entfernen
    dispatch(removeCar({ id }));
};

  return (
    <div>
      <MenuBar
        position='static'
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <Typography
        variant='h6'
        gutterBottom
        sx={{ marginLeft: '20px', marginTop: '20px', marginRight: '20px' }}
      >
        Cars in the garage:
      </Typography>

      <Table >
        <TableHead>
          <TableRow> 
            <TableCell sx={{paddingLeft: '21px'}}>Manufacturer</TableCell>
            <TableCell>Model</TableCell>
            <TableCell>Year</TableCell>
            <TableCell>Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredCars.map((car) => (
            <TableRow key={car.id} hover sx={{ cursor: 'pointer' }}>
              <TableCell sx={{paddingLeft: '21px'}} onClick={() => navigate(`/car/${car.id}`)}>
                {car.manufacturer}
              </TableCell>
              <TableCell onClick={() => navigate(`/car/${car.id}`)}>
                {car.model}
              </TableCell>
              <TableCell onClick={() => navigate(`/car/${car.id}`)}>
                {car.year}
              </TableCell>
              <TableCell>
                <DeleteIcon
                  onClick={() => handleRemove(car.id)}
                  sx={{ cursor: 'pointer', marginLeft: '15px' }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button
        variant='contained'
        component={Link}
        to='/add-car'
        color='primary'
        startIcon={<AddIcon />}
        sx={{ marginLeft: '20px', marginTop: '20px' }}
      >
        Add new Car
      </Button>
    </div>
  );
};

export default Garage;
