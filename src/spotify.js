// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = "https://accounts.spotify.com/authorize";
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "d53385e0301f419d9cc657f09c23f907";
//const redirectUri = "http://localhost:3000/";
const redirectUri = "https://spotify-clone-phi.vercel.app/";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "user-library-read"
];

export const dummyAvatarURL = "https://lh3.googleusercontent.com/ogw/ADea4I5i7WFLbSdHddCPrlXiIfoaZ0fAcbtE6WPMahYf=s32-c-mo"
export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
