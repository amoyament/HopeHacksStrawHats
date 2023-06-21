const axios = require("axios");
const State = require("../models/state");
exports.getLossPage = async (req, res) => {
  res.render("lossIndex");
};

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
    console.log(`I'm sorry, ${stateName} is an invalid state.`);
  }
  console.log(stateId);
  // const geostore = "0e924b4cbb3c57c489102bee82e5539a";

  axios
    .get(
      `https://production-api.globalforestwatch.org/biomass-loss?geostore=${stateId.id}&period=&thresh=30`
    )
    .then((response) => {
      const data = response.data;
      const treeLossByYear = data.data.attributes.treeLossByYear;
      console.log(treeLossByYear);

      // Plug displayed data here
      // OR is there a way to plug it into the HTML page
      // const loss2001 = jsondata.attributes.treeLossByYear.2001;
      // const loss2002 = jsondata.attributes.treeLossByYear.2002;
      // const loss2003 = jsondata.attributes.treeLossByYear.2003;
      // const loss2004 = jsondata.attributes.treeLossByYear.2004;
      // const loss2005 = jsondata.attributes.treeLossByYear.2005;
      // const loss2006 = jsondata.attributes.treeLossByYear.2006;
      // const loss2007 = jsondata.attributes.treeLossByYear.2007;
      // const loss2008 = jsondata.attributes.treeLossByYear.2008;
      // const loss2009 = jsondata.attributes.treeLossByYear.2009;
      // const loss2010 = jsondata.attributes.treeLossByYear.2010;
      // const loss2011 = jsondata.attributes.treeLossByYear.2011;
      // const loss2012 = jsondata.attributes.treeLossByYear.2012;
      // const loss2013 = jsondata.attributes.treeLossByYear.2013;
      // const loss2014 = jsondata.attributes.treeLossByYear.2014;
      // res.write(`<h1>Tree loss in ${stateName} from 2001 to 2014</h1>`);
      // res.write(`<p>2001: ${loss2001}\n2002: ${loss2002}\n2003: ${loss2003}\n2004: ${loss2004}\n2005: ${loss2005}\n2006: ${loss2006}\n2007: ${loss2007}\n2008: ${loss2008}\n2009: ${loss2009}\n2010: ${loss2010}\n2011: ${loss2011}\n2012: ${loss2012}\n2013: ${loss2013}\n2014: ${loss2014}\n</p>`);
      // res.send();
    })
    .catch((error) => {
      console.error(error);
    });
};
