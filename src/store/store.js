import { createSlice,configureStore } from "@reduxjs/toolkit";

    const initialCounterState = {
        value: 0,
        showCounter: true
      };

    const counterSlice= createSlice({
      name:'counter',
      initialState: initialCounterState,
      reducers:{
        increment(state){
          state.counter++
        },
        decrement(state){
          state.counter--
        },
        increase(state,action){
          state.counter=state.counter+action.payload
        },
        toggleCounterHandler(state){
          state.showCounter=!state.showCounter
        },
        reset(state){
          state.counter=0
        }
      }
    }) 

    
    //Aut state and Slice

    const initialAuthState={
      isAuthenticated:false
    }
   const authSlice= createSlice({
      name:'authentication',
      initialState:initialAuthState,
      reducers:{
        login(state){
          state.isAuthenticated=true;
        },
        logout(state){
          state.isAuthenticated=false;
        }
      }
    })


const store = configureStore({
  reducer:{  //reducer not reducers
      counter:counterSlice.reducer,
      auth:authSlice.reducer,
  }
});
export const counterActions=counterSlice.actions  
export const authActions=authSlice.actions
export default store;
