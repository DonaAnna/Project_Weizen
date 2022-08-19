import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userReducer from "./userRedux";

combineReducers({user:userReducer});


export const store = configureStore({

  reducer:{
    user: userReducer
  }
});





