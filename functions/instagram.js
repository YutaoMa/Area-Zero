const axios = require('axios');

exports.handler = (event, context, callback) => {
  axios.get(process.env.API_INSTAGRAM_URL, {
    params: {
      access_token: process.env.API_INSTAGRAM_KEY,
    },
  })
    .then(({ data, }) => {
      return data;
    })
    .then((data) => {
      return JSON.stringify(data);
    })
    .then((data) => {
      callback(null, {
        statusCode: 200,
        body: data,
      });
    })
    .catch((error) => {
      callback(error);
    });
};
