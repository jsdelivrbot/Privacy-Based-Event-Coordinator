import {GET_EVENT_DATA} from '../actions/index';

export default function(state = [], action) {
  console.log('Action: ', action);
  switch (action.type) {
    case GET_EVENT_DATA:
    console.log(action.payload);
    // var appendToState = action.payload;
    // if (action.payload[0].data) {
    //   appendToState = action.payload[0].data;
    // }
      return [action.payload.data, ...state];
      break;
    default:

  }
  return state;
}
