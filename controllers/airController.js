const axios = require("axios");

const apiKey = "ce4234ab80db2c15a72ff2396257df089601adf3";

exports.getPage = async (req, res) => {
  res.render("airIndex");
};

exports.apiCall = async (req, res) => {
  const city = req.body.city;

  // if (!city) {
  //   res.send(
  //     `<h1>I'm sorry, ${city} is not a valid city name. 🙁\n Please press the back button and try again.</h1>`
  //   );
  //   return;
  // }

  axios.get(`https://api.waqi.info/feed/${city}/?token=${apiKey}`).then((response) => {
    const data = response.data;
    if (data.status === "error") {
      var notValid = `I'm sorry, "${city}" is not a valid state name. 🙁`;
      res.render("airIndex", {
        notValid,
      });
      return;
    }
    const aqi = data.data.aqi;
    const particulateMatter = data.data.iaqi.pm25["v"];
    // console.log(data);
    // console.log(particulateMatter);

    res.render("airIndex", {
      aqi,
      particulateMatter,
      city,
    });
  });
  // .catch((error) => {
  //   console.error(error);
  //   res.render(
  //     `<h1>I'm sorry, ${city} is not a valid city. Please press the back button and try again. 🙁</h1>`
  //   );
  // });
};
