// store/reducer/profileSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProfileState {
  name: string;
  email: string;
  phone: string;
  address: string;
  photo: string;
}

const initialState: ProfileState = {
  name: 'Muhammad Fariz',
  email: 'mfariz8701@gmail.com',
  phone: '088214043728',
  address: 'Jl. Rawa Tengah',
  photo: '',
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    setPhoto: (state, action: PayloadAction<string>) => {
      state.photo = action.payload;
    },
    updateProfile: (state, action: PayloadAction<ProfileState>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const {
  setName,
  setEmail,
  setPhone,
  setAddress,
  setPhoto,
  updateProfile,
} = profileSlice.actions;

export default profileSlice.reducer;
