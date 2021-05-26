import { connect } from 'react-redux';
import {Component} from 'react';

var initialState = {
    info: {
        Name:"Robby Blacka",
        Location:"Oduom",
        Number:"+233000000000"
    }
}

export const SETPROFILEDATAACTION = (value) => ({
    type: "addContact", payload: value
  })

const usersReducers = (state = initialState, action) => {
    switch (action.type) {
        case "addContact":

          return {...state, profile:action.payload}
    
        default: return state;
        
    }
}

export default usersReducers;

