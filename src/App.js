import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Garage from './components/garage/garage';
import AddCar from './components/add-car/add-car';
import EditCar from './components/edit-car/edit-car';
import CarDetails from './components/car-details/car-details';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Garage />} />
        <Route path="/car/:id" element={<CarDetails />} />
        <Route path="/add-car" element={<AddCar />} />
        <Route path="/edit-car/:id" element={<EditCar />} />
      </Routes>
    </Router>
  );
};

export default App;
