import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface CityFromState {
  cityFrom: string;
  cityFromName: string;
  lastActivity: string;
  isCompleted: boolean;
  orderId: string;
}

const initialState: CityFromState = {
  cityFrom: "",
  cityFromName: "",
  lastActivity: "",
  isCompleted: false,
  orderId: "",
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setCityFrom: (state, action: PayloadAction<string>) => {
      state.cityFrom = action.payload;
    },
    setCityFromName: (state, action: PayloadAction<string>) => {
      state.cityFromName = action.payload;
    },
    setLastActivity: (state, action: PayloadAction<string>) => {
      state.lastActivity = action.payload;
    },
    setIsCompleted: (state, action: PayloadAction<boolean>) => {
      state.isCompleted = action.payload;
    },
    setOrderId: (state, action: PayloadAction<string>) => {
      state.orderId = action.payload;
    },
  },
});

export const { setCityFrom } = homeSlice.actions;
export const { setCityFromName } = homeSlice.actions;
export const { setLastActivity } = homeSlice.actions;
export const { setIsCompleted } = homeSlice.actions;
export const { setOrderId } = homeSlice.actions;

export const selectCityFrom = (state: RootState) => state.home.cityFrom;
export const selectCityFromName = (state: RootState) => state.home.cityFromName;
export const selectLastActivity = (state: RootState) => state.home.lastActivity;
export const selectIsCompleted = (state: RootState) => state.home.isCompleted;
export const selectOrderId = (state: RootState) => state.home.orderId;

export default homeSlice.reducer;
