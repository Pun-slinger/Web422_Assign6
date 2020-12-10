const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/web422-a4'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '/dist/web422-a4/index.html'));
});

app.listen(process.env.PORT || 8080);