const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const filepath = process.env.CLIENT_PATH || "/Users/dylanslyter/Desktop/19-DS-PWA's/client/dist";
app.use(express.static(filepath));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./server/routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));