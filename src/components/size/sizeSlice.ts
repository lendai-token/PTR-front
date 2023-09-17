import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface MoveAmount {
  moveAmount: string;
  moveVehicle: boolean;
}

const initialState: MoveAmount = {
    moveAmount: "1",
    moveVehicle: false,
};

export const sizeSlice = createSlice({
  name: "size",
  initialState,
  reducers: {
    setMoveAmount: (state, action: PayloadAction<string>) => {
      state.moveAmount = action.payload;
    },
    setMoveVehicle: (state, action: PayloadAction<boolean>) => {
      state.moveVehicle = action.payload;
    },
  },
});

export const { setMoveAmount } = sizeSlice.actions;
export const { setMoveVehicle } = sizeSlice.actions;

export const selectMoveAmount = (state: RootState) =>
  state.size.moveAmount;

  export const selectMoveVehicle = (state: RootState) =>
  state.size.moveVehicle;

export default sizeSlice.reducer;
