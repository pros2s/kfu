/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const firstCharUpperCase = require('../firstCharUpperCase');

module.exports = async (layer, sliceName) => {
  const componentName = firstCharUpperCase(sliceName);
  const schemaName = `${sliceName}Schema`;

  try {
    await fs.writeFile(
      resolveRoot('src', layer, sliceName, 'index.ts'),
      `export { ${componentName} } from './ui/${componentName}/${componentName}';
export type { ${firstCharUpperCase(
        schemaName,
      )} } from './model/types/${schemaName}';
export {
  ${sliceName}Reducer,
  use${sliceName}Actions,
} from './model/slices/${sliceName}Slice';`,
    );
  } catch (e) {
    console.log('Не удалось создать PUBLIC API');
  }
};
