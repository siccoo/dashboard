import { configureStore } from "@reduxjs/toolkit";
import generalSlice from "./features/generalSlice";
import moduleGeneralSlice from "./features/moduleGeneralSlice";

// Configuring the Redux store with your slices
const store = configureStore({
  reducer: {
    general: generalSlice,
    moduleGeneral: moduleGeneralSlice,
  },
});

// Types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
