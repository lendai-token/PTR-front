import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface MoveDateState {
  moveDate: string;
  arrivalDate: string;
}

const initialState: MoveDateState = {
    moveDate: '1',
    arrivalDate: '',
};

export const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    setMoveDate: (state, action: PayloadAction<string>) => {
      state.moveDate = action.payload;
    },
    setArrivalDate: (state, action: PayloadAction<string>) => {
      state.arrivalDate = action.payload;
    },
  },
});

export const { setMoveDate } = dateSlice.actions;
export const { setArrivalDate } = dateSlice.actions;

export const selectMoveDate = (state: RootState) =>
  state.date.moveDate;

export const selectArrivalDate = (state: RootState) =>
  state.date.arrivalDate;

export default dateSlice.reducer;
