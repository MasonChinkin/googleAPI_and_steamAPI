# Using Sheets as a database plus a little Steam API

This read-only website uses Google Sheets' API as a database and populates roster avatars using Steam's API. Descriptions of how I did this in an Express.js route below.

## Google API

First we need to earn Google's trust.

```javascript
  let jwtClient = new google.auth.JWT(
    keys.client_email,
    null,
    keys.private_key.replace(/\\n/g, '\n'),
    // replace(/\\n/g, '\n') is necessary to sanatize the new line breaks built into
    // google's API key. Without it, Heroku cannot properly store the key as a config var.
    ['https://www.googleapis.com/auth/spreadsheets.readonly'])

  jwtClient.authorize(function (err, tokens) {
    (err) ? console.log(err): console.log("Connected to google sheets!")
  })

  let sheetsRequest = {
    spreadsheetId: '1i1G-XpcjXXe0X012ovtwZC7uJ4ADOsVB6W_Gw8vWngs',
    range: 'Public View',
    auth: jwtClient,
  }
```

Then we make our fetch for the Sheets rows:

```javascript
sheets.spreadsheets.values.get(sheetsRequest, function (err, sheetsResponse) {
  if (err) {
    console.error(err)
    return
  }

  const steam = new SteamAPI(keys.steam_api);
  let members = sheetsResponse.data.values.slice(1)
  Promise.all(members.map(member => memberDetailsFetch(member, steam)))
    .then(steamResponse => {
      res.status(200).json(steamResponse)
    })
})
```

## 93x2 Steam API calls at once using nested promises

I needed to make 2 seperate Steam API calls for each member. This is done using nested Promise.alls. The upper level Promise.all is in the above snippet, mapping over the array of members with a helper function, which contains the inner Promise.all:

```javascript
const memberDetailsFetch = (member, steam) => {
  const profile = {
    name: member[0],
    tier: member[1],
    steamID: member[2]
  }

  if (!profile.steamID) return profile

  return Promise.all([
      steam.getUserSummary(profile.steamID),
      steam.getUserRecentGames(profile.steamID)
    ])
    .then(res => {
      const summary = res[0]
      const recentGames = res[1]
      // not currently using recentGames due to people's privacy settings being too high
      profile.country = summary.countryCode
      profile.avatar = summary.avatar
      return profile
    })
}
```
