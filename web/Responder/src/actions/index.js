import axios from 'axios';
var saj = require('simple-aes-json');

export const SEND_EVENT_DATA = 'SEND_EVENT_DATA';
export const GET_EVENT_DATA  = 'GET_EVENT_DATA';

const baseURL = 'http://localhost:6060/api';

export function sendEventData(data) {
  var jsonData = JSON.stringify(data);
  var eventID  = '58c19ff1ce67b210a34c53c9';
  var putURL   = baseURL + '/event/' + eventID;
  axios.put(putURL, {eventData: jsonData});
  // const getRequest = axios.get(requestURL);
  // console.log("Request: ", getRequest);
  // POST made here
  // console.log(JSON.stringify(data));
  return {
    // type: FETCH_WEATHER,
    // payload: getRequest
    type: SEND_EVENT_DATA
  };
}

export function getEventData() {
  // For testing purposes this is being hard coded.
  var eventID   = '58c19ff1ce67b210a34c53c9';
  var getURL    = baseURL + '/event/' + eventID;
  var data = axios.get(getURL);

  return {
    type: GET_EVENT_DATA,
    payload: data
  };
}
