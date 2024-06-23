const path = require('path');
let filepath = process.env.CLIENT_PATH || "/Users/dylanslyter/Desktop/19-DS-PWA's/client/dist";
filepath += "/index.html";
module.exports = (app) =>
  app.get('/', (req, res) =>
    res.sendFile(filepath)
  );
