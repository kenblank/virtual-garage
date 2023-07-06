import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './cars/cars-slice';

// Beim Initialisieren des Stores, versuche die Daten aus dem Local Storage zu laden
const savedCarsState = localStorage.getItem('virtual-garage');
const initialState = savedCarsState ? { cars: JSON.parse(savedCarsState) } : undefined;

const store = configureStore({
  reducer: {
    cars: carsReducer,
  },
  preloadedState: initialState, // Verwenden des geladenen Zustands als Anfangszustand
});

// Speichern der Daten im Local Storage, wenn der Store aktualisiert wird
store.subscribe(() => {
  localStorage.setItem('virtual-garage', JSON.stringify(store.getState().cars));
});

export default store;
