var express = require('express');
var app = express();
app.use(express.static('./'));
app.listen(process.env.PORT || 3000 , () => console.log("Server running on port 3000!"));
