const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const cors = require('cors');
const UUID = require('uuid-int');


const connection = mysql.createConnection({
  host: "server2.bsthun.com",
  port: "6105",
  user: "lab_1jiqml",
  password: "2QLhYXzQjZNr98y2",
  database: "lab_blank01_1j3sbrh",
});

connection.connect(() => {
  console.log("Database is connected");
});

const port = 3000;
const app = express();


app.use(bodyParser.json());
app.use(express.json());
app.use(cors({ origin: "http://localhost:3001", credentials: true }));

app.get("/", (_req, res) => {
  console.log("maleaw ja");
  res.send("Hello World!");
});

app.post("/auth/register", (req, res) => {
  const { firstName, lastName, username, email, password } = req.body;
  connection.query(
    "SELECT email FROM user WHERE email = ?",
    [email],
    async (error, result) => {
      if (error) {
        console.log(error);
      }
      // if (result.length > 0) {
      //   return res.render("register", {
      //     message: "This email is already in use",
      //   });
      // }
      const id = 0;
      const generator = UUID(id);
      const uuid = generator.uuid()%10000;
      connection.query(
        "INSERT INTO user SET ?",
        { 
          user_id: uuid,
          first_name: firstName,
          last_name: lastName,
          username: username,
          email: email,
          password: password,
          phone_number:"0000000000"
        },
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            return res.render("register", {
              message: "User registered!",
            });
          }
        }
      );
    }
  );
});

app.get("/1", (_req, res) => {
  connection.query("SELECT * FROM user", (err, result) => {
    if (err) {
      console.log("error");
    } else {
      res.json(result);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
