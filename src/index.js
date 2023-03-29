import express from "express";
import {faker} from "@faker-js/faker";
import connection from "./database.js";

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  const name = faker.name.fullName();

  connection.query(`INSERT INTO people(name) VALUES('${name}')`, (err, _) => {
    if (err) {
      console.log(err);
    }
  })

  connection.query("SELECT * FROM people", (err, result) => {
    if (err) {
      console.log(err);
    }

    result = result.map(person => {
      return `<li>${person.name}</li>`;
    }).join('');

    res.send('<h1>Full Cycle Rocks!</h1>' + `<ol>${result}</ol>`);
  })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));