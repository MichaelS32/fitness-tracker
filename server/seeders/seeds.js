// const faker = require('faker');
const userSeeds = require('./userSeed.json');
const thoughtSeeds = require('./goalSeed.json');
const db = require('../config/connection');
const { Goal, User } = require('../models');

db.once('open', async () => {
  try {
    await Goal.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < goalSeeds.length; i++) {
      const { _id, goalAuthor } = await Goal.create(goalSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: goalAuthor },
        {
          $addToSet: {
            goal: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});