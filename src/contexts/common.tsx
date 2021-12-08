import { DropDownHolder } from "../components/atoms";
import DropdownAlert from "react-native-dropdownalert";
import React, { useState, createContext, useContext } from "react";

interface CommonContextData {
  loading: boolean;
  setLoading: (state: boolean) => void;
}

const CommonContext = createContext<CommonContextData>({} as CommonContextData);

export const CommonProvider: React.FC = ({ children }) => {
  const [loading, setLoadingState] = useState(false);

  const setLoading = (state: boolean) => setLoadingState(state);

  return (
    <CommonContext.Provider value={{ loading, setLoading }}>
      <DropdownAlert ref={(ref: any) => DropDownHolder.setDropDown(ref)} />
      {children}
    </CommonContext.Provider>
  );
};

export function useCommon() {
  return useContext(CommonContext);
}
