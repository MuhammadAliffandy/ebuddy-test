"use client"

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Store, persistor } from './store';

interface StoreProviderProps {
    children: React.ReactNode;
}

const StoreProvider: React.FC<StoreProviderProps> = ({ children }: StoreProviderProps) => {
    return (
        <Provider store={Store}>
            <PersistGate loading={null} persistor={persistor}>
                {children as null}
            </PersistGate>
        </Provider>
    );
}

export default StoreProvider;