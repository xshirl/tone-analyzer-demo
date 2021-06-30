require("dotenv").config()

var request = require("request")

var toneUsername = process.env.USERNAME
var tonePassword = process.env.PASSWORD
var toneUrl = `${process.env.URL}/v3/tone?version=2017-09-21`

var data = {}
data.text = "I am happy to see you."

request.post(
  {
    url: toneUrl,
    json: data,
    auth: {
      user: toneUsername,
      pass: tonePassword,
    },
  },
  function (err, response, body) {
    // console.log(body)

    for (let tone of body.document_tone.tones) {
      console.log(`${tone.tone_name}, Score: ${tone.score}`)
    }
  }
)
