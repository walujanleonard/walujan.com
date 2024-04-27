const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Create blog post CLI by Leonard Walujan - walujan.com \n");

rl.question("Enter post title: ", function (title) {
  rl.question("Enter post description: ", function (description) {
    rl.question("Enter post date (format: DD/MM/YYYY): ", function (date) {
      const [day, month, year] = date.split("/");
      const selectedDate = new Date(`${year}-${month}-${day}`);
      const isoDate = selectedDate.toISOString().replace("Z", "+08:00");
      rl.question("Enter post category: ", function (category) {
        rl.question("Enter post cover image URL: ", function (coverImage) {
          rl.question("Enter post card image URL: ", function (cardImage) {
            const content = `---
title: ${title}
description: ${description}
date: '${isoDate}'
category: ${category}
coverImage: ${coverImage}
cardImage: ${cardImage}
---
`;
            const postDir = `contents/blog/${year}/`;
            if (!fs.existsSync(postDir)) {
              fs.mkdirSync(postDir, { recursive: true });
            }

            const fileName = `${postDir}${title
              .replace(/\s+/g, "-")
              .toLowerCase()}.mdx`;
            fs.writeFileSync(fileName, content);
            console.log(`\nBlog post created successfully at ${fileName}`);
            rl.close();
          });
        });
      });
    });
  });
});
