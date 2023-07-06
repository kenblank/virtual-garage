import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        addCar: (state, action) => {
            state.push(action.payload);
        },
        removeCar: (state, action) => {
            state = state.filter(car => car.id !== action.payload.id);
            return state;
        },
        updateCar: (state, action) => {
            const index = state.findIndex(car => car.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        setCars: (state, action) => {
            state = action.payload;
            return state;
        },
    },
});

export const { addCar, removeCar, updateCar, setCars } = carsSlice.actions;

export default carsSlice.reducer;
