import path from 'path';


export default {
  process(sourceText, sourcePath, options) { // eslint-disable-line no-unused-vars
    return {
      code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,
    };
  },
};
