import { configureStore } from '@reduxjs/toolkit';
import homeSlice from '../components/home/homeSlice';
import sizeSlice from '../components/size/sizeSlice';
import dateSlice from '../components/date/dateSlice';
import destCitySlice from '../components/destcity/destCitySlice';
import fullNameSlice from '../components/name/nameSlice';
import emailSlice from '../components/email/emailSlice';
import phoneSlice from '../components/phone/phoneSlice';
import loginSlice from "../components/auth/login/loginSlice";


export const store = configureStore({
  reducer: {
    home: homeSlice,
    size: sizeSlice,
    date: dateSlice,
    destcity: destCitySlice,
    name: fullNameSlice,
    email: emailSlice,
    phone: phoneSlice,
    login: loginSlice,
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
