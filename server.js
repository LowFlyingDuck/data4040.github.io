const express = require('express');
const app = express();

app.listen(80, () => console.log('listening at port 80'));
app.use(express.static('public'));
