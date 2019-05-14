const express = require('express');
const router = express.Router();
const {
  google
} = require('googleapis');
const sheets = google.sheets('v4');
const creds = require('../config/keys_dev')

router.get('/', function (req, res, next) {
  authorize((authClient) => {
    const request = {
      spreadsheetId: '1AuE8xWqvRqyM1FRWJPjhVXRuHfUcal5bgHx6jkcyA7M',
      range: 'A1:B3',
      auth: authClient,
    };

    sheets.spreadsheets.values.get(request, (err, response) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(response)
    })
  });

})


function authorize(callback) {
  // TODO: Change placeholder below to generate authentication credentials. See
  // https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample
  //
  // Authorize using one of the following scopes:
  //   'https://www.googleapis.com/auth/drive'
  //   'https://www.googleapis.com/auth/drive.file'
  //   'https://www.googleapis.com/auth/drive.readonly'
  //   'https://www.googleapis.com/auth/spreadsheets'
  //   'https://www.googleapis.com/auth/spreadsheets.readonly'
  const authClient = null;

  const oauth2Client = new google.auth.OAuth2(
    YOUR_CLIENT_ID,
    YOUR_CLIENT_SECRET,
    YOUR_REDIRECT_URL
  );

  // generate a url that asks permissions for Blogger and Google Calendar scopes
  const scopes = [
    'https://www.googleapis.com/auth/blogger',
    'https://www.googleapis.com/auth/calendar'
  ];

  const url = oauth2Client.generateAuthUrl({
    // 'online' (default) or 'offline' (gets refresh_token)
    access_type: 'offline',

    // If you only need one scope you can pass it as a string
    scope: scopes
  });

  if (authClient == null) {
    console.log('authentication failed');
    return;
  }
  callback(authClient);
}

module.exports = router;