import DropdownAlert from "react-native-dropdownalert";
import React, { useState, createContext, useContext } from "react";

import { queries, req } from "../services";
import { usePromiseHandler } from "../hooks";
import { DropDownHolder } from "../components/atoms";

interface CommonContextData {
  loading: boolean;
  exampleReq: (data: any) => void;
  setLoading: (state: boolean) => void;
}

const CommonContext = createContext<CommonContextData>({} as CommonContextData);

export const CommonProvider: React.FC = ({ children }) => {
  const [loading, setLoadingState] = useState(false);

  const setLoading = (state: boolean) => setLoadingState(state);

  async function exampleReq(data: any) {
    setLoading(true);

    const [result, error] = await usePromiseHandler(req(queries().example, data), () =>
      setLoading(false)
    );

    if (!!error) {
      // TODO: Set catch actions
      DropDownHolder.alert("error", "Erro: ", error.response.status);
      return;
    } else {
      // TODO: Set then actions
      DropDownHolder.alert("success", "Sucesso: ", "Mensagem");
    }
  }

  return (
    <CommonContext.Provider value={{ loading, setLoading, exampleReq }}>
      <DropdownAlert ref={(ref: any) => DropDownHolder.setDropDown(ref)} />
      {children}
    </CommonContext.Provider>
  );
};

export function useCommon() {
  return useContext(CommonContext);
}
