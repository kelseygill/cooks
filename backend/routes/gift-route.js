const axios = require('axios')
const config = require('./config.json')

module.exports = function (request, response) {

  const api_key = config.api_key;
  const domain = 'sandbox032e3089bedb4b49ab3675a1b1f66763.mailgun.org';
  const mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

  const toBrokenLines = (obj) => {
    let body = [' ']
    for (let prop in obj) {
      body.push(`${prop}: ${obj[prop]}`)
    }
    return body.join('\n')
  }

  const data = {
    from: 'The Cooks Garden <me@samples.mailgun.org>',
    to: 'kelsey.gill.work@live.com.au',
    subject: 'A new gift request',
    text: toBrokenLines(request.body)
  };

  mailgun.messages().send(data, function (error, body) {
    console.log(body);
  });

}
