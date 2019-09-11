const axios = require('axios');

exports.handler = (event, context, callback) => {
  axios.get(process.env.API_INSTAGRAM_URL, {
    params: {
      access_token: process.env.API_INSTAGRAM_KEY,
    },
  })
    .then(({ data, }) => {
      return data.data.map((post) => {
        if (post.type === 'carousel') {
          return {
            type: post.type,
            images: post.carousel_media.map((image) => {
              return {
                image: image.images.standard_resolution,
              };
            }),
            caption: post.caption ? post.caption.text : '',
            tags: post.tags,
          };
        }
        return {
          type: post.type,
          image: post.images.standard_resolution,
          caption: post.caption ? post.caption.text : '',
          tags: post.tags,
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
