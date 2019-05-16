const express = require('express');
const router = express.Router();
const {
  google
} = require('googleapis');
const sheets = google.sheets('v4');
const keys = require('../bin/keys')

router.get('/', function (req, res, next) {

  // configure a JWT auth client
  let jwtClient = new google.auth.JWT(
    keys.client_email,
    null,
    keys.private_key,
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