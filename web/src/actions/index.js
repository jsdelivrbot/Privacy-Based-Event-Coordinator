import axios from 'axios';


// export const FETCH_WEATHER = 'FETCH_WEATHER';
export const SEND_EVENT_DATA = 'SEND_EVENT_DATA';

export function sendEventData(data) {
  // const requestURL = baseUrl + city + apiKey;
  // const getRequest = axios.get(requestURL);
  // console.log("Request: ", getRequest);
  // POST made here
  console.log(JSON.stringify(data));
  return {
    // type: FETCH_WEATHER,
    // payload: getRequest
    type: SEND_EVENT_DATA
  };
}
