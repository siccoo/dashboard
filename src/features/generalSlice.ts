import { createSlice } from "@reduxjs/toolkit";
import { GeneralInitialProps } from "../types/general.interface";

const initialState: GeneralInitialProps = {
  sideNavIsOpen: false,
  moduleSubNavIsOpen: false,
  screenSize: { width: 0, height: 0 },
  isLoading: false,
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    toggleSideNav: (state, { payload }) => {
      state.sideNavIsOpen = payload;
    },
    toggleModuleSubNav: (state, { payload }) => {
      state.moduleSubNavIsOpen = payload;
    },
    setScreenSize: (state, { payload }) => {
      state.screenSize = payload;
    },
  },
  extraReducers: () => {},
});

export const { toggleSideNav, toggleModuleSubNav, setScreenSize } =
  generalSlice.actions;

export default generalSlice.reducer;
