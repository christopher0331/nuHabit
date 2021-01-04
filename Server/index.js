const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const morgan = require('morgan')
const path = require('path')
const habitData = require('../Database/index.js');

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

app.use(express.static(PUBLIC_DIR))

app.post('/all', (req, res) => {
    console.log('body from All ===> ', req.body)
    // const info = [req.body.id, req.body.habitName]
    const query1 = `insert into habitinfo (diet, exercise, meditation, reading, reflection, sleep, userName, inputDate) values (${req.body.diet}, ${req.body.exercise}, ${req.body.meditation}, ${req.body.reading}, ${req.body.reflection}, ${req.body.sleep}, '${req.body.userName}', '${req.body.inputDate}')`
    // const values = [`${req.body.diet}, ${req.body.exercise}, ${req.body.meditation}, ${req.body.reading}, ${req.body.reflection}, ${req.body.sleep}, '${req.body.userName}', ${req.body.inputDate}`];
    // console.log('values ====> ', values)
    habitData.query(query1, (err, data) => {
        if(err) {
          res.status(505)
        } else {
          console.log('hello from inside query')
          res.send('Success from server')
          res.end()
        }
    })
})

app.get('/all', (req, res) => {
    const query = `Select * from habitinfo`;
    habitData.query(query, (err, data) => {
      if (err) {
        console.log('Failed to retrieve data!', err);
        res.status(505);
      } else {
          console.log('from server', data)
        for(let i =0; i < data.rows.length; i++){
            data.rows[i].inputdate = data.rows[i].inputdate.toString();
            data.rows[i].inputdate = data.rows[i].inputdate.slice(0, 15);
        };
        res.send(data);
      }
    });
})

app.listen(port, () => console.log(`listening on port ${port}`)); 
