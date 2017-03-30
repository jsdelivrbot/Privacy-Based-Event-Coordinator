# Introduction

The Privacy Aware Scheduler (PAS) is developed as a proof of concept for Information Privacy and Security course (CAS 767) at McMaster University. This project was developed as a proof of concept prototype and serves that purpose. It is by no means final product meant for deployment. The project is intended to demonstrate that an event can scheduled by collecting a minimal set of information from each user and by not divulging the schedules of users to one another.

# Description

This section is meant as a guide to help the user understand the roles that have been assigned to the Master, Responder, and Chooser.

- Master:
  - The Master is designated to initiate a new event and provide the event information, invited individuals, and the first set of possible times for the event.
- Responder:
  - The Responder is, in the proof of concept, the sole invitee to the event and views the event information while adding the second set of possible times for the event.
- Chooser:
  - The Chooser will display an interface showing the common subset of available times, within the set of times submitted by the Master and Responder, to be picked from for the event.

# Usage

## Requirements

The PAS was tested on a very specific environment, which comprised the following:

- Google Chrome
- The `Allow-Control-Allow-Origin` add-on for Google Chrome. This add-on **must** be enabled for the data flow to properly work at this time. The add-on can be found within the chrome web store.
- Node.js v6.9.2
- npm v3.10.9

## Running the "happy" test case

The "happy" test case is currently the supported test case and is done as a proof of concept. Outside of this path the system hasn't been tested and is not guaranteed to work at this time. The node modules are currently included within the release, but can be reinstalled by running `npm install` within each directory (e.g. `web/Chooser`).

1. Start the server by running `node server.js` within the `server/` directory.
2. Run the Master user interface by running `npm start` within the `web/Master` directory.
3. Fill in the fields and submit the event information using the interface at `localhost:8080`. The port number can be changed within the configuration as desired. At this time the Chooser, Master, and Responder share a port and cannot run concurrently.
4. Terminate the Master.
5. Run the Responder interface by running `npm start` within the `web/Responder` directory.
6. Fill in the fields within the Responder interface at `localhost:8080`.
7. Terminate the Responder.
8. Run the Chooser interface by running `npm start` within the `web/Chooser` directory.
9. Possible event times will be displayed within the interface, which will be the common times within the set of times between the Master and Responder.
