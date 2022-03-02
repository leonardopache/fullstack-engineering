require('dotenv').config()
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  let name = process.env.NAME || 'Leonardo ';
  console.log(`the Name is: ${name}`);
  name = name.toLowerCase();
  res.send(`Hello ${name}!! `);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});
// [END run_helloworld_service]
// [END cloudrun_helloworld_service]

// Exports for testing purposes.
module.exports = app;
