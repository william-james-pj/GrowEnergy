import React, { createContext, ReactNode, useState } from "react";
import { CondominiumsType, DevicesType } from "../@types/types";

type CondominiumSelectedContextType = {
  selectCondominium: (condominium: CondominiumsType) => void;
  condominiumSelected: CondominiumsType | undefined;
  selectStation: (station: DevicesType) => void;
  stationSelected: DevicesType | undefined;
};

type CondominiumSelectedContextProviderProps = {
  children: ReactNode;
};

export const CondominiumSelectedContext = createContext(
  {} as CondominiumSelectedContextType
);

export function CondominiumSelectedContextProvider(
  props: CondominiumSelectedContextProviderProps
) {
  const [condominiumSelected, setCondominiumSelected] =
    useState<CondominiumsType>();

  const [stationSelected, setStationSelected] = useState<DevicesType>();

  const selectCondominium = (condominium: CondominiumsType) => {
    setCondominiumSelected(condominium);
  };

  const selectStation = (station: DevicesType) => {
    setStationSelected(station);
  };

  return (
    <CondominiumSelectedContext.Provider
      value={{
        selectCondominium,
        condominiumSelected,
        selectStation,
        stationSelected,
      }}
    >
      {props.children}
    </CondominiumSelectedContext.Provider>
  );
}
