drop database nuhabit;

create database nuhabit;

\c nuhabit;

CREATE TABLE habitInfo (
  id serial PRIMARY KEY,
  diet integer,
  exercise integer,
  meditation integer, 
  reading integer,
  reflection integer,
  sleep integer,
  userName text,
  inputDate date unique
);

-- const habits = new Schema({
--   id: Number,
--   habitName: String,
--   name: String,
--   score: Number,
--   comments: [{ body: String, date: Date }],
--   date: { type: Date, default: Date.now }
-- });