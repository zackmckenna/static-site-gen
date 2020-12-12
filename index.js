const fs = require("fs");

const posts = fs
  .readdirSync(config.dev.postdir)
  .map((post) => post.slice(0, -3));

console.log(posts);
