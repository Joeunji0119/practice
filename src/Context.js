import { createContext, useContext, useState } from "react";

export const DataContext = createContext();

export const Context = ({ children }) => {
  const [data, setData] = useState([]);
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useGetData = () => useContext(DataContext);
