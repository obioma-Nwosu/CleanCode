const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000;

module.exports = {
  //start server, initialize middleware and all high level details
  start: () => {
    app.listen(PORT, () => {
      console.log('Listening on port: ', PORT)
    })
  }
}