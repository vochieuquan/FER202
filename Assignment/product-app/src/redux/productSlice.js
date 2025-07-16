import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('product/fetch', async () => {
  const res = await axios.get('http://localhost:3001/products');
  return res.data;
});

export const addProduct = createAsyncThunk('product/add', async (newProduct) => {
  const res = await axios.post('http://localhost:3001/products', newProduct);
  return res.data;
});

export const deleteProduct = createAsyncThunk('product/delete', async (id) => {
  await axios.delete(`http://localhost:3001/products/${id}`);
  return id;
});

const productSlice = createSlice({
  name: 'product',
  initialState: {
    items: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'succeeded';
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      });
  }
});

export default productSlice.reducer;
