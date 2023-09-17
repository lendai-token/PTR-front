import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

export interface loginState {
  isLoggedIn: boolean;
}

const initialState: loginState = {
    isLoggedIn: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setIsLoggedIn } = loginSlice.actions;

export const selectIsloggedIn = (state: RootState) =>
  state.login.isLoggedIn;

export default loginSlice.reducer;
