const axios = require('axios')

module.exports = function (request, response) {

  const api_key = '3b40713aa4cbd52de8eb4338007968a5-1053eade-02da1637';
  const domain = 'sandbox032e3089bedb4b49ab3675a1b1f66763.mailgun.org';
  const mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

  const toBrokenLines = 

  const data = {
    from: 'The Cooks Garden <me@samples.mailgun.org>',
    to: 'kelsey.gill.work@live.com.au',
    subject: 'A new gift request',
    text: request.body.
  };

  mailgun.messages().send(data, function (error, body) {
    console.log(body);
  });

}
