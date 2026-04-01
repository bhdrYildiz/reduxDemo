import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  data: {},
};

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  return Promise.resolve({ id: 1, name: "John Doe" });
});

export const { reducer, actions } = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Burada async actions'ları handle edebilirsin
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});
