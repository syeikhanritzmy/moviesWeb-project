import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const API = `${import.meta.VITE_BASE_URL}/s=`

const initialState = {
  search: [],
  loading: false,
};

export const searchMovies = createAsyncThunk(
  'search/searchMovies',
  async (search) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/?s=${search}&apikey=${
          import.meta.env.VITE_KEY
        }`
      );
      return response.data.Search;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchMovies.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(searchMovies.fulfilled, (state, { payload }) => {
      state.search = payload;
      state.loading = false;
    });

    builder.addCase(searchMovies.rejected, (state, action) => {
      state.loading = false;
      //  (state.error = action.message.error);
    });
  },
});

export default searchSlice.reducer;
