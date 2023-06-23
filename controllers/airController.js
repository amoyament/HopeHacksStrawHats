const axios = require("axios");

const apiKey = "ce4234ab80db2c15a72ff2396257df089601adf3";

exports.getPage = async (req, res) => {
  res.render("airIndex");
};

exports.apiCall = async (req, res) => {
  const city = req.body.city;

  axios
    .get(`https://api.waqi.info/feed/${city}/?token=${apiKey}`)
    .then((response) => {
      const data = response.data;
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
};
