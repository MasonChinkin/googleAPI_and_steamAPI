const SteamAPI = require('steamapi');

const express = require('express');
const router = express.Router();
const {
  google
} = require('googleapis');
const sheets = google.sheets('v4');
const keys = require('../bin/keys')

router.get('/', function (req, res, next) {
  // Sheets
  let jwtClient = new google.auth.JWT(
    keys.client_email,
    null,
    keys.private_key.replace(/\\n/g, '\n'),
    ['https://www.googleapis.com/auth/spreadsheets.readonly']);

  jwtClient.authorize(function (err, tokens) {
    (err) ? console.log(err): console.log("Connected to google sheets!")
  });

  let sheetsRequest = {
    spreadsheetId: '1i1G-XpcjXXe0X012ovtwZC7uJ4ADOsVB6W_Gw8vWngs',
    range: 'Public View',
    auth: jwtClient,
  };

  // sheets.spreadsheets.values.get(sheetsRequest, function (err, response) {
  //   if (err) {
  //     console.error(err);
  //     return;
  //   }


  //   res.status(200).json(response.data.values)
  // })

  // Steam

  const steam = new SteamAPI(keys.steam_api);

  sheets.spreadsheets.values.get(sheetsRequest, function (err, response) {
    if (err) {
      console.error(err);
      return;
    }

    let members = response.data.values.slice(1)
    members = Promise.all(members.map(member => memberDetailsFetch(member, steam)))

    members.then(res => console.log(res))

    // res.status(200).json(members)
  })
})

module.exports = router;

const memberDetailsFetch = (member, steam) => {
  const profile = {
    name: member[0],
    tier: member[1],
    steamID: member[2]
  }
  if (!profile.steamID) return profile

  Promise.all([
      steam.getUserSummary(profile.steamID),
      steam.getUserRecentGames(profile.steamID)
    ])
    .then(res => {
      const summary = res[0]
      const recentGames = res[1]

      for (let i = 0; i < recentGames.length; i++) {
        if (recentGames[i].name === "Squad") {
          profile.squadTime = recentGames[i].playTime / 60 // for hours
          break
        }
      }

      profile.country = summary.countryCode
      profile.avatar = summary.avatar
      console.log(profile)
      return profile
    })
}