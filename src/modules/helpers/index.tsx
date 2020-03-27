// @flow

export const getImagePath = (name: string): string => {
  return require('assets/' + name);
};
