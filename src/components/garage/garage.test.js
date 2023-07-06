import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Garage from './garage';

const mockStore = configureStore([]);

describe('Garage Component', () => {
  let store;
  const garageText = 'Cars in the garage:';
  const manufacturerText = 'Manufacturer';
  const modelText = 'Model';
  const yearText = 'Year';
  const removeText = 'Remove';

  beforeEach(() => {
    store = mockStore({
      cars: [
        { id: '1', manufacturer: 'Porsche', model: '911', year: '2022' },
        { id: '2', manufacturer: 'Tesla', model: 'Model X', year: '2023' },
      ],
    });
  });

  it('should render the garage component', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Garage />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(garageText)).toBeInTheDocument();
    expect(screen.getByText(manufacturerText)).toBeInTheDocument();
    expect(screen.getByText(modelText)).toBeInTheDocument();
    expect(screen.getByText(yearText)).toBeInTheDocument();
    expect(screen.getByText(removeText)).toBeInTheDocument();
  });

  it('should display the cars from mock store', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Garage />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText('Porsche')).toBeInTheDocument();
    expect(screen.getByText('911')).toBeInTheDocument();
    expect(screen.getByText('2022')).toBeInTheDocument();

    expect(screen.getByText('Tesla')).toBeInTheDocument();
    expect(screen.getByText('Model X')).toBeInTheDocument();
    expect(screen.getByText('2023')).toBeInTheDocument();
  });
});
