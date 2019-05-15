const express = require('express');
const router = express.Router();
const {
  google
} = require('googleapis');
const sheets = google.sheets('v4');
const privateKey = require('../bin/privateKey.json')

router.get('/', function (req, res, next) {

  // configure a JWT auth client
  let jwtClient = new google.auth.JWT(
    privateKey.client_email,
    null,
    privateKey.private_key,
    ['https://www.googleapis.com/auth/spreadsheets.readonly']);
  //authenticate request
  jwtClient.authorize(function (err, tokens) {
    (err) ? console.log(err): console.log("Successfully connected!")
  });

  let request = {
    spreadsheetId: '1AuE8xWqvRqyM1FRWJPjhVXRuHfUcal5bgHx6jkcyA7M', // TODO: Update placeholder value.
    range: 'sheet1', // TODO: Update placeholder value.
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