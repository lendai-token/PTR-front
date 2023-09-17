import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Email {
  email: string;
  popupOpen: boolean;
  userId: number;
  subscriptionId: number;
}

const initialState: Email = {
  email: "",
  popupOpen: true,
  userId: 0,
  subscriptionId: 0,
};

export const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPopupOpen: (state, action: PayloadAction<boolean>) => {
      state.popupOpen = action.payload;
    },
    setUserId: (state, action: PayloadAction<number>) => {
      state.userId = action.payload;
    },
    setSubscriptionId: (state, action: PayloadAction<number>) => {
      state.subscriptionId = action.payload;
    },
  },
});

export const { setEmail } = emailSlice.actions;
export const { setPopupOpen } = emailSlice.actions;
export const { setUserId } = emailSlice.actions;
export const { setSubscriptionId } = emailSlice.actions;

export const selectEmail = (state: RootState) => state.email.email;
export const selectPopupOpen = (state: RootState) => state.email.popupOpen;
export const selectUserId = (state: RootState) => state.email.userId;
export const selectSubscriptionId = (state: RootState) => state.email.subscriptionId;

export default emailSlice.reducer;
