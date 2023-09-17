import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Phone {
  phone: string;
}

const initialState: Phone = {
    phone: "",
};

export const phoneSlice = createSlice({
  name: "phone",
  initialState,
  reducers: {
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
  },
});

export const { setPhone } = phoneSlice.actions;

export const selectPhone = (state: RootState) =>
  state.phone.phone;

export default phoneSlice.reducer;
