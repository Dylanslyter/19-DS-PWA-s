const path = require('path');
const filepath = "/Users/dylanslyter/Desktop/19-DS-PWA's/client/dist/index.html";
module.exports = (app) =>
  app.get('/', (req, res) =>
    //res.sendFile(path.join(__dirname, '../client/dist/index.html'))
    res.sendFile(filepath)
  );
