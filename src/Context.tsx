import * as React from "react";
import { createContext, useContext, useState } from "react";

export type DataType = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

type DataTypes = {
  datas: DataType[];
  setDatas: React.Dispatch<React.SetStateAction<DataType[]>>;
};

// type DataTypes = {
//   memoizedValue: {
//     datas: DataType[];
//     setDatas: React.Dispatch<React.SetStateAction<DataType[]>>;
//   };
// };
export const DataContext = createContext<DataTypes>(null);

export const Context = ({ children }: { children: React.ReactNode }) => {
  const [datas, setDatas] = useState<DataType[]>([]);

  // const memoizedValue = React.useMemo(() => ({ datas, setDatas }), [datas]);

  return (
    <DataContext.Provider value={{ datas, setDatas }}>
      {children}
    </DataContext.Provider>
  );
};

export const useGetData = () => useContext(DataContext) as DataTypes;
