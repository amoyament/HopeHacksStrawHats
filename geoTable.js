require('dotenv').config()

const mysql = require('mysql')

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.PASSWORD,
    database: "hope",
  });
  connection.connect(function (err) {
    if (err) {
      return console.error("error: " + err.message);
    }
    console.log("Connected to the MySQL server.");
    let creatGeo = `CREATE TABLE IF NOT EXISTS geostore (
        id  VARCHAR(255) PRIMARY KEY,
        state VARCHAR(255) NOT NULL
    );`;

    connection.query(creatGeo, function (err, results, fields) {
        if (err) {
          console.log(err.message);
        }
      });

const geoIds = [["7b807f79fe56fa876529b00487a8a6b0", "illinois"],
["b52a81e7cebcfe3327bc813a9762cad9", "louisiana"],
["8850bd642023250522ae4ff03b640b16", "oregon"],
["d69d1bbe1e6ace7877e70c741bafa769", "kentucky"],
["28062465e979fd1e90c60434957001b4", "arkansas"],
["35af068daebeb13eeb386b34b4657ead", "minnesota"],
["a0facd0253efa546072a3ba0cd95dab5", "utah"],
["320d988a56855c964f862794c8342244", "montana"],
["4b527690dd2d54debdeafa2741d48b12", "tennessee"],
["0e924b4cbb3c57c489102bee82e5539a", "california"],
["3478fdce82b2bf326611f44ee71cea89", "oklahoma"],
["847d661128c799dd2b93eb6261a04e41", "arizona"],
["616606e01c2f9512486ace248c299a3d", "new york"],
["dfb3d2deded24387b420ff637763c141", "georgia"],
["8c0ebe102e6de564d893043b0d29efdf", "colorado"],
["2362b7b56efff64a6a3bba9fa35e47fd", "indiana"],
["c50195d3a4b6b178824a42ef97adcaa1", "new jersey"],
["88d328a79d36f75c965565d56f8ff247", "west virginia"],
["32a7242481baf74b609715ce35a204d5", "vermont"],
["78b7d09e1954cb67f95d25d9bc52de71", "florida"],
["d0480a507595abd3dc87a11b206e055a", "mississippi"],
["de3ea02f25a8d4263ac59319af14df7b", "south dakota"],
["b0cc5322eee140b6450db3b13c95296e", "ohio"],
["f7b94d6df98b1ba2343a552c7d0badfb", "north dakota"],
["ce6e8be68b1fbd748f2ff020837c5552", "new mexico"],
["669bdc86b5284606ad60173a200d02e5", "maine"],
["c53e2dd5e5b6c8f62d58335d50e5a078", "nevada"],
["12f07fa8a648476a9411a03fc2cc30d5", "massachusetts"],
["6f6e300bc142aa56bcf1ee7b2dea866c", "idaho"],
["ac4846fc580e3361d3e687eb7c1eb01b", "alabama"],
["95bdba3a5449fc89790f23595580443f", "south carolina"],
["4633b7a46e4fc699eb2f689e6fdb16f2", "wyoming"],
["239be8150a8a1a35134420d82d3af562", "pennsylvania"],
["e073909c9e4befeee33bc4e2884a0d14", "alaska"],
["7f65eb94ba1082e925281dc98faaf94d", "iowa"],
["19c461736308e9459b57e637dd55013b", "texas"],
["aa1062a9a31ce1531daf371e5fd15dfb", "virginia"],
["15df221fd6b36a2c6c1694078544e3d7", "maryland"],
["3f6eb84b12bdf513957590aaa85460cb", "nebraska"],
["e4b4aa7f67a116082817dacd83695162", "missouri"],
["3321bcd49077b7035085e8315eb69ca1", "north carolina"],
["5c5599a85b08f76c338b65ac0a3ae806", "delaware"],
["76fa4f9e29a1251a0857161cf825c779", "kansas"],
["e96084ba0aa5b4bbfbf81c963198540f", "new hampshire"],
["6cb20e12f62626a6442498021d91c15d", "connecticut"],
["47c4027ccc913ad8b66e625aefdd7cfb", "michigan"],
["d3dae3e0a09d65909c4c78c4b6a5d738", "wisconsin"],
["ed4ac015ae1ef7c460426fbca9592fb1", "washington"],
["71d2b78be699015a6c9b7a79f6112af7", "hawaii"],
["f785e8b1527db68e603edf1064c5f8af", "rhode island"]]

const sql = 'INSERT INTO geostore (id, state) values ?'
connection.query(sql, [geoIds], (error, results)=>{
    if (error){
        console.log(error)
    }else{
        console.log("success")
    }
})
})




