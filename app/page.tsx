import PageBox from './pageBox.tsx'
import secret from './.gitignore/secret.jsx'
{/* <script src="https://apis.google.com/js/api.js"></script> */}

// import 'https://apis.google.com/js/api.js'

// const {gapi} = require('googleapis');

const API_KEY = 'AIzaSyCHfMo2Y2iP7FOHzZb7fys8KG_RA45vM-k'
const CLIENT_ID = '569826233667-fra6jdo9lf2htqtdcseeeip96gifpnb3.apps.googleusercontent.com'

// const url = secret.generateAuthUrl({
//   scope: 'https://www.googleapis.com/auth/drive'
// })

// function authenticate() {
//   return gapi.auth2.getAuthInstance()
//       .signIn({scope: "https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.metadata https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/drive.photos.readonly https://www.googleapis.com/auth/drive.readonly"})
//       .then(function() { console.log("Sign-in successful"); },
//             function(err) { console.error("Error signing in", err); });
// }
// function loadClient() {
//   gapi.client.setApiKey("YOUR_API_KEY");
//   return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/drive/v3/rest")
//       .then(function() { console.log("GAPI client loaded for API"); },
//             function(err) { console.error("Error loading GAPI client for API", err); });
// }
// // Make sure the client is loaded and sign-in is complete before calling this method.
// function execute() {
//   return gapi.client.drive.files.list({})
//       .then(function(response) {
//               // Handle the results here (response.result has the parsed body).
//               console.log("Response", response);
//             },
//             function(err) { console.error("Execute error", err); });
// }
// gapi.load("client:auth2", function() {
//   gapi.auth2.init({client_id: "YOUR_CLIENT_ID"});
// })




export default function Home() {

  let boxArray: any[] = []

  for (let i: any = 0; i < 5; i+=1) {
    boxArray.push(<PageBox name={i}/>)
  }

  return (
    <main className="flex min-h-screen flex-col items-center flex-start p-24">
      <script src="https://apis.google.com/js/api.js"></script>


      <div className="items-center justify-between m-4 border-solid border-2 border-pink-500 h-10 w-60">
        welcome to my homepage
      </div>

      <div className="flex flex-row">
        {boxArray}
      </div>

    </main>
  );
}
