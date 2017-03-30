import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
  console.log('Action: ', action);
  switch (action.type) {
    case FETCH_WEATHER:
    // Prevents [a,b,[c]], ensures [a,b,c]
      return [action.payload.data, ...state];
    default:

  }
  return state;
}
