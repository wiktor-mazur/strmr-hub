'use client';

import React, { createContext, useContext } from 'react';

interface GlobalData {
    subsCount: number | null;
}

const DataContext = createContext<GlobalData>({ subsCount: null });

export const DataProvider = ({ children, value }: { children: React.ReactNode; value: GlobalData }) => {
    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);