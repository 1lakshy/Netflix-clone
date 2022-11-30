import {configureStore,
createAsyncThunk,
createSlice} from "@reduxjs/toolkit"
import auth from "./authSlice.js";

const initialState = {
    movies:[],
    genresLoaded: false,
    generes:[],
};



const NetflixSlice = createSlice({
    name:"Netflix",
    initialState,
    extraReducers:(builder)=>{},
});

export const store = configureStore({
    reducer: {
    netflix: NetflixSlice.reducer, 
 
    },
})