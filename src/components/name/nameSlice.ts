import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface FullName {
  fullName: string;
}

const initialState: FullName = {
    fullName: "",
};

export const fullNameSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    setFullName: (state, action: PayloadAction<string>) => {
      state.fullName = action.payload;
    },
  },
});

export const { setFullName } = fullNameSlice.actions;

export const selectFullName = (state: RootState) =>
  state.name.fullName;

export default fullNameSlice.reducer;
