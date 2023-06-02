const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const UUID = require("uuid-int");

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

app.get("/", (req, res) => {
  console.log("maleaw ja");
  res.send("Hello World!");
});

app.get("/user", (req, res) => {
  const userId = req.query.userId;
  // console.log(userId);
  const sqlSelect = "SELECT * FROM user WHERE user_id = ?";
  connection.query(sqlSelect, [userId], (err, rows) => {
    if (err) {
      res.json({
        error: "error",
      });
    } else {
      res.json({
        data: rows[0],
      });
    }
  });
  // res.send("Hello World!");
});

app.delete("/user", (req, res) => {
  const userId = req.query.userId;
  // console.log(userId);
  const sqlSelect = "DELETE FROM user WHERE user_id = ?";
  connection.query(sqlSelect, [userId], (err, rows) => {
    if (err) {
      res.json({
        error: "error",
      });
    } else {
      res.json({
        message:"delete successful"
      });
    }
  });
  // res.send("Hello World!");
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
      const uuid = generator.uuid() % 10000;
      connection.query(
        "INSERT INTO user SET ?",
        {
          user_id: uuid,
          first_name: firstName,
          last_name: lastName,
          username: username,
          email: email,
          password: password,
          phone_number: "0000000000",
        },
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            return res.json(result);
          }
        }
      );
    }
  );
});

app.post("/auth/login", (req, res) => {
  const { email, password } = req.body;

  connection.query(
    "SELECT * FROM user WHERE email = ?",
    [email],
    (error, results) => {
      if (error) {
        console.log(error);
        return res
          .status(500)
          .send("An error occurred while processing your request.");
      }

      if (results.length === 0) {
        return res.status(401).send("Invalid email or password.");
      }

      const user = results[0];

      if (password !== user.password) {
        return res.status(401).send("Invalid email or password.");
      } else {
        console.log("hello");
        res.json({
          userId: user.user_id,
        });
      }
    }
  );
});

app.get("/checkuser", (_req, res) => {
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
