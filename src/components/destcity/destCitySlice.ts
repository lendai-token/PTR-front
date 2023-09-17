import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface CityToState {
  cityTo: string;
  cityToName: string;
}

const initialState: CityToState = {
    cityTo: '',
    cityToName: '',
};

export const destCitySlice = createSlice({
  name: "destcity",
  initialState,
  reducers: {
    setCityTo: (state, action: PayloadAction<string>) => {
      state.cityTo = action.payload;
    },
    setCityToName: (state, action: PayloadAction<string>) => {
      state.cityToName = action.payload;
    },
  },
});

export const { setCityTo } = destCitySlice.actions;
export const { setCityToName } = destCitySlice.actions;

export const selectCityTo = (state: RootState) =>
  state.destcity.cityTo;

export const selectCityToName = (state: RootState) =>
  state.destcity.cityToName;

export default destCitySlice.reducer;
