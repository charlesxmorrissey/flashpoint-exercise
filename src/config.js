const config = {
  api: {
    authUrl: 'https://accounts.spotify.com/authorize',
    baseUrl: 'https://api.spotify.com/v1',
    redirectUri: 'http://localhost:3000',
    responseType: 'token',
    tokenUrl: 'https://accounts.spotify.com/api/token',
    clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
    clientSecret: process.env.REACT_APP_SPOTIFY_CLIENT_SECRET,
  },
}

export default config
