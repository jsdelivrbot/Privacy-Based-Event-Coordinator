import axios from 'axios';
var saj = require('simple-aes-json');

export const SEND_EVENT_DATA        = 'SEND_EVENT_DATA';
export const GET_UPDATED_EVENT_DATA = 'GET_EVENT_DATA'

const baseURL = 'http://localhost:6060/api';

export function sendEventData(data) {
  var jsonData = JSON.stringify(data);
  var postURL = baseURL + '/event';
  var encryptedData = ''
  saj.encrypt(jsonData, 'passphrase', function(encrypted) {
    console.log("Encrypted data: " + encrypted);
    encryptedData = encrypted;
  });

  axios.post(postURL, {
    eventData: encryptedData
  })
  .then(function(response) {
    console.log('Reponse from server: ' + response);
  })
  .catch(function(error) {
    console.log("Error occured during POST" + error);
  });
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
