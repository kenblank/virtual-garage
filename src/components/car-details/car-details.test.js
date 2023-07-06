import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CarDetails from './car-details';

const mockStore = configureStore([]);

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '1',
  }),
}));

describe('CarDetails Component', () => {
  let store;
  const car = {
    id: '1',
    manufacturer: 'Porsche',
    model: 'Taycan',
    year: '2022',
    fuelType: 'Electro',
    mileage: 1000,
  };

  it('should render the car details', () => {
    store = mockStore({
      cars: [car],
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <CarDetails />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByTestId('car-details-card')).toBeInTheDocument();
    expect(screen.getByTestId('back-to-garage-button')).toBeInTheDocument();
    expect(screen.getByTestId('edit-car-button')).toBeInTheDocument();
  });

  it('should display the loading message when car is not found', () => {
    // Aktualisiere den store, indem das cars-Array leer ist
    store = mockStore({
      cars: [],
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <CarDetails />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText('Cardetails are loading...')).toBeInTheDocument();
  });
});