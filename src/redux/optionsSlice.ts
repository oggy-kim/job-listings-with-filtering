import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const INITIAL_STATE: string[] = [];

export const optionsSlice = createSlice({
  name: 'options',
  initialState: INITIAL_STATE,
  reducers: {
    selectedOptions: (state) => {
        return state;
    },
    addOption: (state, action) => {
      return [
        ...state, action.payload
      ];
    },    
    deleteOption: (state, action: PayloadAction<string>) => {
        return state.filter(item => { return item !== action.payload})
      },
    deleteAllOptions: () => {
      return [];
    }
  },
});

export const { addOption, selectedOptions, deleteOption, deleteAllOptions } = optionsSlice.actions;

export default optionsSlice.reducer;
