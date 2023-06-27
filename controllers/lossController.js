const axios = require("axios");
const State = require("../models/state");

//render tree loss page
exports.getLossPage = async (req, res) => {
  res.render("lossIndex");
};

//use state model to pull geostore id for state to be passed into api call
exports.getLossData = async (req, res) => {
  const stateName = req.body.stateName;
  // set up state name equal to a state id to then plug into the geostore
  //Set up error handling for if (!stateId){
  //res.send(`<h1>I'm sorry, ${stateName} is an invalid state. 🙁</h1>`);)
  // }else{
  // Pass stateName into something that gets the geostore

  // So we implement something like this for the state/geostore?
  const [stateId] = await State.getGeostoreByState(stateName);

  if (!stateId) {
    var notValid = `I'm sorry, "${stateName}" is not a valid state name. 🙁`;
    res.render("lossIndex", {
      notValid,
    });
    return;
  }

  axios
    .get(
      `https://production-api.globalforestwatch.org/biomass-loss?geostore=${stateId.id}&period=&thresh=30`
    )
    .then((response) => {
      const data = response.data;
      const treeLossByYear = data.data.attributes.treeLossByYear["2001"];
      const treeLossByYear2 = data.data.attributes.treeLossByYear["2002"];
      const treeLossByYear3 = data.data.attributes.treeLossByYear["2003"];
      const treeLossByYear4 = data.data.attributes.treeLossByYear["2004"];
      const treeLossByYear5 = data.data.attributes.treeLossByYear["2005"];
      const treeLossByYear6 = data.data.attributes.treeLossByYear["2006"];
      const treeLossByYear7 = data.data.attributes.treeLossByYear["2007"];
      const treeLossByYear8 = data.data.attributes.treeLossByYear["2008"];
      const treeLossByYear9 = data.data.attributes.treeLossByYear["2009"];
      const treeLossByYear10 = data.data.attributes.treeLossByYear["2010"];
      const treeLossByYear11 = data.data.attributes.treeLossByYear["2011"];
      const treeLossByYear12 = data.data.attributes.treeLossByYear["2012"];
      const treeLossByYear13 = data.data.attributes.treeLossByYear["2013"];
      const treeLossByYear14 = data.data.attributes.treeLossByYear["2014"];
      console.log(data);
      res.render("lossIndex", {
        treeLossByYear,
        treeLossByYear2,
        treeLossByYear3,
        treeLossByYear4,
        treeLossByYear5,
        treeLossByYear6,
        treeLossByYear7,
        treeLossByYear8,
        treeLossByYear9,
        treeLossByYear10,
        treeLossByYear11,
        treeLossByYear12,
        treeLossByYear13,
        treeLossByYear14,
        stateName,
      });
      // res.write(`<p>2001: ${loss2001}\n2002: ${loss2002}\n2003: ${loss2003}\n2004: ${loss2004}\n2005: ${loss2005}\n2006: ${loss2006}\n2007: ${loss2007}\n2008: ${loss2008}\n2009: ${loss2009}\n2010: ${loss2010}\n2011: ${loss2011}\n2012: ${loss2012}\n2013: ${loss2013}\n2014: ${loss2014}\n</p>`);
      // res.send();
    })
    .catch((error) => {
      console.error(error);
    });
};
