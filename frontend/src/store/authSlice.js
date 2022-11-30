import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth: false,
  user: {
    email:"",
    password:""
  },
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      const { email,password } = action.payload;

      state.user.email = email;
      state.user.password = password;

      // if(user.email === ""){
      //   state.isAuth = false;

      // }else{
      //   state.isAuth = true;
      // }

    },
    // setOtp: (state, action) =>{

    //   const {email,hash} = action.payload;
    //   state.otp.email = email;
    //   state.otp.hash = hash;

    // }

}})

// Action creators are generated for each case reducer function
export const { setAuth } = authSlice.actions

export default authSlice.reducer