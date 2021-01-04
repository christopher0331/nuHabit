drop database nuhabit;

create database nuhabit;

\c nuhabit;

CREATE TABLE habitInfo (
  id serial PRIMARY KEY,
  habitName text,
  userName text,
  score integer,
  inputDate date
);

-- const habits = new Schema({
--   id: Number,
--   habitName: String,
--   name: String,
--   score: Number,
--   comments: [{ body: String, date: Date }],
--   date: { type: Date, default: Date.now }
-- });