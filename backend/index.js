const express = require("express");
var cors = require('cors')
const app = express();
app.use(cors());
const { createProxyMiddleware } = require('http-proxy-middleware');
app.use('/instagram', createProxyMiddleware({
    target: 'https://www.instagram.com/angelbots1339/', //original url
    changeOrigin: true,
    //secure: false,
    onProxyRes: function (proxyRes, req, res) {
        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    }
}));
app.listen(8000);

















// const express = require('express');
// const app = express();
// const ky = require('ky')
// require('dotenv').config()
//
//
// const port = process.env.PORT;
// const fields = "";
// const userID = "";
//
// app.get('/instagram', (req, res) => {
//
//     console.log("Instagram Request Received");
//     console.log(req);
//
//     ky.get("https://graph.instagram.com/{api-version}/" + userID + `?fields=${fields}` + `&access_token=${process.env.INSTA_KEY}`, (data)=> {
//
//         res.send(data);
//
//     });
//
// })
//
//
// /* Auth Window URL
// *
// * https://api.instagram.com/oauth/authorize
//   ?client_id={instagram-app-id}
//   &redirect_uri={redirect-uri}
//   &scope={scope}
//   &response_type=code
// *
// *
// * Getting Token Docs: https://developers.facebook.com/docs/instagram-basic-display-api/guides/getting-access-tokens-and-permissions
// *
// *
// *
// * */
//
//
// app.listen(port, () => {
//     console.log("Server is running");
// });
//
//
//
//
