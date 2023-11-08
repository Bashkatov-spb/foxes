import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { AnimalsState } from '../../features/animals/types/State';
import * as api from '../../App/api';

const initialState: AnimalsState = {
  animals: [],
  error: null,
  loading: true,
};

export const loadAnimals = createAsyncThunk('animals/load', () => api.fetchAnimals());

export const addAnimal = createAsyncThunk('animal/add', (animal: FormData) =>
  api.fetchAnimalAdd(animal),
);

const animalsSlice = createSlice({
  name: 'animals',
  initialState,
  reducers: {
    stopLoading: (state) => {
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadAnimals.fulfilled, (state, action) => {
        state.animals = action.payload;
      })
      .addCase(loadAnimals.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      })
      .addCase(loadAnimals.pending, (state) => {
        state.loading = true;
      })
      .addCase(addAnimal.fulfilled, (state, action) => {
        state.animals = [...state.animals, action.payload];
      });
  },
});

export const { stopLoading } = animalsSlice.actions;
export default animalsSlice.reducer;

// export function animalsReducer(state: AnimalsState = initialState, action: Action): AnimalsState {
//   switch (action.type) {
//     case 'animals/load':
//       return {
//         ...state,
//         animals: action.payload,
//       };
//     case 'animals/remove':
//       return {
//         ...state,
//         animals: state.animals.filter((animal) => animal.id !== action.payload),
//       };
//     case 'animals/add':
//       return {
//         ...state,
//         animals: [...state.animals, action.payload],
//       };
//     default:
//       return state;
//   }
// }
