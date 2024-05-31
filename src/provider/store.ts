import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/auth.slice";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type RootState = ReturnType<typeof store.getState>;

export default store;
