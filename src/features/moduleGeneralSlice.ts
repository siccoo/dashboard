import { createSlice } from "@reduxjs/toolkit";
import { GeneralModuleInitialProps } from "../types/gen-module.interface";

const initialState: GeneralModuleInitialProps = {
  navIsOpen: false,
  language: "en"
};

const moduleGeneralSlice = createSlice({
  name: "moduleGeneral",
  initialState,
  reducers: {
    toggleNav: (state, { payload }) => {
      state.navIsOpen = payload;
    },
  },
});

export const { toggleNav } = moduleGeneralSlice.actions;

export default moduleGeneralSlice.reducer;