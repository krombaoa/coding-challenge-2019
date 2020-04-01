// @flow

export const getImagePath = (name: string): string => {
  return require('assets/' + name);
};

export const getConfig = (key: string) => {
  return require('config.json')[key];
};
