import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ListState {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
  conditions: string[];
}

const INITIAL_STATE = [] as ListState[];

export const listSlice = createSlice({
  name: 'list',
  initialState: INITIAL_STATE,
  reducers: {
    getList: (state, action: PayloadAction<ListState[]>) => {
      return action.payload;
    },
  }
});

export const { getList } = listSlice.actions;

export default listSlice.reducer;
