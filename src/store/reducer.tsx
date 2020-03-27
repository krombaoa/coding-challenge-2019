// @flow
import { IInitialStateProps, IActionProps } from '../common/types';
import { FETCH_DATA } from '../common/constants';

export const initialState = {
  data: [],
};

export const reducer = (state: IInitialStateProps, action: IActionProps): IInitialStateProps => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_DATA:
      return { ...state, data: payload };
    default:
      throw new Error();
  }
};
