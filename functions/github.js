const axios = require('axios');

exports.handler = (event, context, callback) => {
  axios.get(process.env.API_GITHUB_URL, {
    params: {
      visibility: 'public',
      affiliation: 'owner',
    },
    headers: {
      Authorization: `Bearer ${process.env.API_GITHUB_KEY}`,
    },
  })
    .then(({ data, }) => {
      return data.map((repo) => {
        return {
          name: repo.name,
          url: repo.html_url,
          description: repo.description,
          language: repo.language,
        };
      });
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
