import prettier from 'prettier/standalone';
import { Options } from 'prettier';

const plugins = {
  html: require('prettier/plugins/html'),
  css: require('prettier/plugins/postcss'),
  babel: require('prettier/plugins/babel'),
  esTree: require('prettier/plugins/estree'),
};

const getPrettierOptions = (filename: string): Options => {
  const fileType = filename.split('.').pop();

  switch (fileType) {
    case 'html':
      return {
        parser: 'html',
        plugins: [plugins.html],
      };
    case 'css':
      return {
        parser: 'css',
        plugins: [plugins.css],
      };
    case 'jsx':
    case 'js':
      return {
        parser: 'babel',
        plugins: [plugins.babel, plugins.esTree],
      };
    default:
      return {};
  }
};

export const formatCodeWithPrettier = async (code: string, file: string) => {
  const prettierOptions = getPrettierOptions(file);
  const prettyCode = await prettier.format(code, prettierOptions);

  return prettyCode;
};
