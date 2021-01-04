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

app.post('/exercise', (req, res) => {
    console.log(req.body)
    // const info = [req.body.id, req.body.habitName]
    const query1 = `insert into habitinfo (habitName, userName, score, inputDate) values ('${req.body.habitName}', '${req.body.userName}', ${req.body.score}, '${req.body.inputDate}')`
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

app.get('/exercise', (req, res) => {
    const query = `Select * from habitinfo where habitname = $1`;
    const values = ['exercise'];
    habitData.query(query, values, (err, data) => {
      if (err) {
        console.log('Failed to retrieve data!', err);
        res.status(505);
      } else {
        for(let i =0; i < data.rows.length; i++){
            data.rows[i].inputdate = data.rows[i].inputdate.toString();
            data.rows[i].inputdate = data.rows[i].inputdate.slice(0, 15);
            if(data.rows[i].habitname === 'exercise'){
                data.rows[i].exercise = data.rows[i].score
            } 
        };
        res.send(data);
      }
    });
})

app.get('/diet', (req, res) => {
    const query = 'Select * from habitinfo where habitname = $1';
    const values = ['diet']
    habitData.query(query, values, (err, data) => {
      if (err) {
        console.log('Failed to retrieve data!', err);
        res.status(505);
      } else {
        for(let i =0; i < data.rows.length; i++){
            data.rows[i].inputdate = data.rows[i].inputdate.toString();
            data.rows[i].inputdate = data.rows[i].inputdate.slice(0, 15);
            if(data.rows[i].habitname === 'diet'){
                data.rows[i].diet = data.rows[i].score
            } 
        };
        res.send(data);
      }
    });
})

app.listen(port, () => console.log(`listening on port ${port}`)); 
