import { createSlice } from "@reduxjs/toolkit";

export interface AccountState {
  account: {
    name: string;
    lastName: string;
    phoneNumber: string;
  };
}
export const initialState: AccountState = {
  account: {
    name: "",
    lastName: "",
    phoneNumber: "",
  },
};
export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    addAccount: (state, action) => {
      state.account = action.payload;
      localStorage.setItem("account", JSON.stringify(state.account));
    },
  },
});
export const { addAccount } = accountSlice.actions;
export default accountSlice.reducer;
