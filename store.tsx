/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, createContext } from 'react';


export const StoreContext = createContext();

export const useStoreContext:any = () => useContext(StoreContext);