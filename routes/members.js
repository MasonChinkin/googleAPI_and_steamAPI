const express = require('express');
const router = express.Router();
const {
  google
} = require('googleapis');
const sheets = google.sheets('v4');

let clientEmail, privateKey;
if (process.env.NODE_ENV === 'production') {
  clientEmail = process.env.GOOGLEAPI_CREDENTIALS.client_email
  privateKey = process.env.GOOGLEAPI_CREDENTIALS.private_key
} else {
  clientEmail = privateKey.client_email
  privateKey = privateKey.private_key
}

const privateKey = require('../bin/privateKey.json')

router.get('/', function (req, res, next) {

  // configure a JWT auth client
  let jwtClient = new google.auth.JWT(
    clientEmail,
    null,
    privateKey,
    ['https://www.googleapis.com/auth/spreadsheets.readonly']);
  //authenticate request
  jwtClient.authorize(function (err, tokens) {
    (err) ? console.log(err): console.log("Successfully connected!")
  });

  let request = {
    spreadsheetId: '1i1G-XpcjXXe0X012ovtwZC7uJ4ADOsVB6W_Gw8vWngs', // TODO: Update placeholder value.
    range: 'Public View', // TODO: Update placeholder value.
    auth: jwtClient,
  };

  sheets.spreadsheets.values.get(request, function (err, response) {
    if (err) {
      console.error(err);
      return;
    }

    res.status(200).json(response.data.values)
  })
})

module.exports = router;