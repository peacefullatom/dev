/**
 * this small utility script allows copying freshly built index.html into 404.html
 */
var fse = require("fs-extra");
var path = `${__dirname}/docs`;
fse
  .copy(`${path}/index.html`, `${path}/404.html`)
  .then(
    () => console.log("404.html was copied successfully."),
    err => console.error("404.html was not copied.\n" + err)
  );
