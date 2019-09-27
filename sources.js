/**
 * this small utility script will generate HTML-save templates from the list provided in sources.json
 */

/** file system operations */
const fse = require('fs-extra');
/** line operations */
const readline = require('readline');
/** source for hash generation */
const hashSource = 'abcdefghijklmnopqrstuvwxyz0123456789';
/** hash length */
const hashLength = 8;
/** path to the sources list */
const sourcesPath = `${__dirname}/src/sources.json`;
/** list of resources */
const sources = require(sourcesPath);
/** path to the destination folder */
const destinationPath = `${__dirname}/src/assets/sources`;

/** hash generator */
const hash = () =>
  hashSource
    .split('')
    .sort(() => (Math.random() > 0.5 ? -1 : 1))
    .join('')
    .substr(
      Math.floor(Math.random() * (hashSource.length - hashLength)),
      hashLength
    );

/** progress output */
const progress = (step, steps) => {
  readline.clearLine(process.stdout);
  readline.cursorTo(process.stdout, 0);
  const percent = Math.ceil((step * 100) / steps);
  process.stdout.write(`${percent}% of source files processed`);
};

if (sources) {
  /**
   * empty directory and create it if it does not exist yet
   * https://github.com/jprichardson/node-fs-extra/blob/master/docs/emptyDir-sync.md
   */
  fse.emptyDirSync(destinationPath);
  // extracting ids
  const keys = Object.keys(sources);
  for (const [index, sourceId] of keys.entries()) {
    // getting source data
    const source = sources[sourceId];
    // progress output
    // console.log(`processing ${index + 1} of ${keys.length} files`);
    progress(index + 1, keys.length);
    // set hash
    if (!source.hash) {
      source.hash = hash();
    }
    // read file and replace HTML entities
    const data = fse
      .readFileSync(`${__dirname}/${source.path}`)
      .toString()
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    // save parsed file
    fse.writeFileSync(`${destinationPath}/${source.hash}`, data);
  }
  process.stdout.write('\n');
  // update sources.json
  fse.writeFileSync(sourcesPath, JSON.stringify(sources, null, 2));
} else {
  // warn if list is empty
  console.log('failed to obtain a list of sources.');
}
