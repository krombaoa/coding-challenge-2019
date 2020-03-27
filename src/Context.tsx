import React, { createContext, useReducer, useEffect } from 'react';
import { initialState, reducer } from './store/reducer';
import { IContextProps, IContextProviderProps } from './common/types';
import { fetchData } from 'store/actions';

export const Context = createContext({} as IContextProps);

export const ContextProvider = ({ children }: IContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.data.length === 0) {
      fetchData(dispatch);
    }
  }, [state]);

  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};
