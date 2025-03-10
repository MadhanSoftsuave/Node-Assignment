const express = require("express");
const pool = require("./db.js");
const app = express();
app.use(express.json());

app.post("/putdetail", async (req, res) => {
  //   let [{ car_name, car_model }] = req.body;

  //  console.log(car_name);
  // let result = `insert into cars(car_id,car_name, car_model) values (uuid_generate_v4(),?,?)`;
  //  for(let a=)
  //console.log(req.body[1]);
  for (let a = 0; a < req.body.length; a++) {
    let { car_name, car_model } = req.body[a];
    //console.log(car_name,car_model);

    let result = `INSERT INTO cars (car_id,car_name, car_model) VALUES (uuid_generate_v4(), $1, $2) `;
    pool.query(result, [car_name, car_model], function (err, data) {
      if (err) {
        console.log(err);
        res.status(500).json({ err });
      } else {
        console.log("inserted successfully");
        res
          .status(200)
          .json({ message: "successfully inserted",  });
      }
    });
  }
});
app.listen(3000, () => {
  console.log("server running on port 3000");
});
