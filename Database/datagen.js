// Now that we have our startWriting function defined we can
// finish our generator. Let’s put the whole thing together:
const fs = require('fs');
const faker = require('faker');
const { argv, options } = require('yargs');
const e = require('express');

const lines = argv.lines || 196;
const filename = argv.output || 'habitdata.csv';
const stream = fs.createWriteStream(filename);

const generateHabitName = () => {
    let habit = 0;
    options = [
        "exercise",
        "diet",
        "reading",
        "meditation",
        "coding",
        "sleep",
        "reflection"
    ]
    habit++
    return options[habit];
}


let index = 1;
const seedHabitData = () => {
    let diet = Math.floor(Math.random() * 11)
    let exercise = Math.floor(Math.random() * 11)
    let meditation = Math.floor(Math.random() * 11)
    let reading = Math.floor(Math.random() * 11)
    let reflection = Math.floor(Math.random() * 11)
    let sleep = Math.floor(Math.random() * 11)
    let userName = 'chris'
    let inputdate = `${2020}-${01}-${index}`
    index++
    return `${diet}|${exercise}|${meditation}|${reading}|${reflection}|${sleep}|${userName}|${inputdate}\n`
}

const startWriting = (writeStream, encoding, done) => {
  let i = lines;
  function writing() {
    let canWrite = true;
    do {
      if (i % (Math.floor(lines / 10)) === 196) {
        console.log(`${i} lines left`);
      }
      i--;
      const habitData = seedHabitData();
      // check if i === 0 so we would write and call `done`
      if (i === 0) {
        // we are done so fire callback
        writeStream.write(habitData, encoding, done);
      } else {
        // we are not done so don't fire callback
        canWrite = writeStream.write(habitData, encoding);
      }
    // else call write and continue looping
    } while (i > 0 && canWrite);
    if (i > 0 && !canWrite) {
    // our buffer for stream filled and need to wait for drain
    // Write some more once it drains.
      writeStream.once('drain', writing);
    }
  }
  writing();
};

// write our `header` line before we invoke the loop
// eslint-disable-next-line quotes
stream.write(`diet|exercise|meditation|reading|reflection|sleep|userName|inputdate\n`, 'utf-8');
// invoke startWriting and pass callback
startWriting(stream, 'utf-8', () => {
  stream.end();
});


seedHabitData();

// const seedingPlaces = () => {
//     let counter = 1;
//     for (let i = 1; i <= 100; i++) {
//       const data = { id: i, info: [] };
//       const usState = faker.address.state();
//       for (let j = 0; j < 12; j++) {
//         counter++;
//         const infoObj = {
//           rating: generateRandFloat(3.5, 5),
//           total_ratings: generateRandInt(1, 50),
//           listing_type: generateRandomListingType(),
//           beds: generateRandInt(2, 6),
//           location: `${faker.address.city()}, ${usState}`,
//           price: generateRandInt(50, 200),
//           liked: false,
//           url: `https://fec-carousel-pics.s3-us-west-2.amazonaws.com/placePics/place${padNum(counter, 4)}.jpg`,
//         };
//         data.info.push(infoObj);
//       }
//       db.createPlaceDoc(data);
//     }
//   };