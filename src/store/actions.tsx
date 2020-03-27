// @flow
import { FETCH_DATA } from 'common/constants';
import { IInitialStateProps, IFetchData } from 'common/types';

// Assuming data is from api url
export const fetchData = (dispatch: Function) => {
  const payload = require('localApi/data.json');
  const type = FETCH_DATA;
  dispatch({ type, payload });
  return require('localApi/data.json');
};

export const fetchDataById = (state: IInitialStateProps, identifier: string): IFetchData => {
  const data = state.data;
  const id = parseInt(identifier);

  const returnData = data.find((data: IFetchData) => data.id === id);

  return returnData;
};

export const fetchHeaderNav = () => {
  return require('localApi/header.json');
};

export const fetchFooterNav = () => {
  return require('localApi/footer.json');
};
