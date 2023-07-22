import { createSlice, isRejectedWithValue } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

const reduxAction = 'users/fetch';
const fetchUser = async ()=>{
  const urlAPI = 'https://randomuser.me/api/?results=5';
  //this can contain the functoin fetch
  console.log('this will fetch data promthe API')
  try{
    //code of block to try
    const request = await fetch(urlAPI)
    const response = await request.json();
    console.log('the resons for fetchUser would be ----->',response)
    return response;
  }catch(error){
    return rejectWithValue(error.message)
  }
}
const getUsers = createAsyncThunk(reduxAction,fetchUser);

fetchUser();//remove after debuggin

const initialState = {
  users: [],
  isLoading: false,
  error: undefined,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder)=>{
    builder.addCase(getUsers.fulfilled, (state, action) => {
      console.log('will run if getUsers is fullfilerd');
    })
  }, //probably wi wil fetch data from here;
});

export const { fetchFromAPI, extraReducers } = usersSlice.actions;
export default usersSlice.reducer;
