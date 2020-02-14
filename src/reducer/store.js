import { createStore } from "redux";

const initialState = {
  name: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  img: "",
  mortgage: "",
  rent: ""
};
export const UPDATE_STEP_ONE = "UPDATE_STEP_ONE";
export const UPDATE_STEP_TWO = "UPDATE_STEP_TWO";
// export const UPDATE_STEP_THREE ='UPDATE_STEP_THREE'
export const UPDATE_STEP_THREE_MORTGAGE = "UPDATE_STEP_THREE_MORTGAGE";
export const UPDATE_STEP_THREE_RENT = "UPDATE_STEP_THREE_RENT";
export const CLEAR_INPUTS = "CLEAR_INPUTS";

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_STEP_ONE:
      // const {name,address,city,state,zip,img,mortgage,rent}= this.state;
      return {
        ...state,
        [action.stateKey]: action.payload
        // name:action.payload.name,
        // address:action.payload.address,
        // city:action.payload.city,
        // state:action.payload.state,
        // zip: action.payload.zip
      };
    case UPDATE_STEP_TWO:
      return {
        ...state,
        img: action.payload
      };
    case UPDATE_STEP_THREE_MORTGAGE:
      return {
        ...state,
        // [action.stateKey]:action.payload
        mortgage: action.payload
      };
    case UPDATE_STEP_THREE_RENT:
      return {
        ...state,
        // [action.stateKey]:action.payload
        rent: action.payload
      };
    case CLEAR_INPUTS:
      return {
        ...state,
        name: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        img: "",
        mortgage: "",
        rent: ""
      };
    default:
      return state;
  }
}

export default createStore(reducer);
