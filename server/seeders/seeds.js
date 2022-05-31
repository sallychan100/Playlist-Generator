// const faker = require('faker');
const userSeeds = require("./userSeed.json");
const playlistSeeds = require("./playlistSeed.json");
const db = require("../config/connection");
const { Playlist, User } = require("../models");

db.once("open", async () => {
  try {
    await Playlist.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < playlistSeeds.length; i++) {
      const { _id, playlistAuthor } = await Playlist.create(playlistSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: playlistAuthor },
        {
          $addToSet: {
            playlists: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
