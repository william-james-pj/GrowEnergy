import React, { createContext, ReactNode, useState, useEffect } from "react";

import { firestore } from "../services/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

import { useAuth } from "../hooks/useAuth";
import {
  CondominiumsType,
  DevicesType,
  GenerationByMonthType,
  GenerationType,
} from "../@types/types";
import {
  getAllGenerationDay,
  getAllGenerationMonth,
} from "../utils/generationsFunctions";
import {
  FirstAndLastDayType,
  getFirstAndLastDayOfLastMonth,
} from "../utils/dateFunctions";

type CondominiumContextType = {
  get: () => Promise<void>;
  condominiums: CondominiumsType[];
  generationThisMonth: GenerationType[];
  generationDay: number;
  generationMonth: number;
  getGenerationsByLastMonths: (
    currentDate: Date,
    numberOFMonth: number,
    stations: DevicesType[]
  ) => Promise<number[]>;
};

type CondominiumContextProviderProps = {
  children: ReactNode;
};

export const CondominiumContext = createContext({} as CondominiumContextType);

export function CondominiumContextProvider(
  props: CondominiumContextProviderProps
) {
  const { user } = useAuth();
  const [condominiums, setCondominiums] = useState<CondominiumsType[]>([]);
  const [generationThisMonth, setGenerationThisMonth] = useState<
    GenerationType[]
  >([]);

  const [generationDay, setGenerationDay] = useState<number>(0);
  const [generationMonth, setGenerationMonth] = useState<number>(0);

  const get = async () => {
    let condominiumsAux: CondominiumsType[] = [];
    if (user?.role === "admin") {
      condominiumsAux = await getAllCondominium();
    } else {
    }

    condominiumsAux = await getStations(condominiumsAux);

    let generations = await getGenerationsByThisMonth(condominiumsAux);
    setGenerationDay(getAllGenerationDay(generations));
    setGenerationMonth(getAllGenerationMonth(generations));
  };

  const getAllCondominium = async (): Promise<CondominiumsType[]> => {
    const docRef = collection(firestore, "condominiums");
    const snaps = await getDocs(docRef);

    let aux: CondominiumsType[] = [];
    snaps.forEach((doc) => {
      let data = doc.data();
      aux.push({
        id: doc.id,
        address: data.address,
        name: data.name,
        stations: [],
      });
    });
    setCondominiums(aux);
    return aux;
  };

  const getStations = async (
    allCondominiums: CondominiumsType[]
  ): Promise<CondominiumsType[]> => {
    if (allCondominiums.length === 0) throw new Error("Nenhum condominium");

    let aux: CondominiumsType[] = [];
    await Promise.all(
      allCondominiums.map(async (condominium) => {
        const q = query(
          collection(firestore, "stations"),
          where("condominium", "==", condominium.id)
        );

        let newCondominiums = { ...condominium };
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          let data = doc.data();
          let newStation: DevicesType = {
            id: doc.id,
            condominium: data.condominium,
            name: data.name,
          };
          newCondominiums.stations.push(newStation);
        });
        aux.push(newCondominiums);
      })
    );

    setCondominiums(aux);
    return aux;
  };

  const getGenerationsByThisMonth = async (
    allCondominiums: CondominiumsType[]
  ): Promise<GenerationType[]> => {
    const now = new Date();
    const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
    firstDay.setHours(1);
    const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    lastDay.setHours(22);

    let stations: DevicesType[] = [];
    allCondominiums.forEach((e) => stations.push(...e.stations));
    let stationIds = stations.map((e) => e.id);

    let aux: GenerationType[] = [];
    await Promise.all(
      stationIds.map(async (id) => {
        const q = query(
          collection(firestore, "values"),
          where("time", ">=", firstDay),
          where("time", "<=", lastDay),
          where("station", "==", id)
        );

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          let data = doc.data();
          let newGeneration: GenerationType = {
            power: data.power,
            station: data.station,
            time: data.time.toDate(),
          };
          aux.push(newGeneration);
        });
      })
    );
    setGenerationThisMonth(aux);
    return aux;
  };

  const getGenerationsByLastMonths = async (
    currentDate: Date,
    numberOFMonth: number,
    stations: DevicesType[]
  ): Promise<number[]> => {
    let stationIds = stations.map((e) => e.id);

    if (stationIds === undefined) return [0];

    const months = getFirstAndLastDayOfLastMonth(currentDate, numberOFMonth);

    let generationAux: GenerationByMonthType[] = [];
    await Promise.all(
      months.map(async (month) => {
        let values = await getAllGenerationsByMonth(stationIds, month);
        generationAux.push(values);
      })
    );

    generationAux.sort((a, b) => a.month - b.month);

    let values = generationAux.map((e) => e.generation);

    return values;
  };

  const getAllGenerationsByMonth = async (
    stations: string[],
    date: FirstAndLastDayType
  ): Promise<GenerationByMonthType> => {
    let generationAux: number[] = [];

    await Promise.all(
      stations.map(async (id) => {
        const q = query(
          collection(firestore, "values"),
          where("time", ">=", date.first),
          where("time", "<=", date.lastDay),
          where("station", "==", id)
        );

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          let data = doc.data();
          generationAux.push(Number(data.power));
        });
      })
    );

    if (generationAux.length === 0)
      return { generation: 0, month: date.first.getMonth() };

    if (generationAux.length === 1)
      return { generation: generationAux[0], month: date.first.getMonth() };

    let generation = generationAux.reduce((a, b) => a + b);

    return { generation, month: date.first.getMonth() };
  };

  return (
    <CondominiumContext.Provider
      value={{
        get,
        condominiums,
        generationThisMonth,
        generationDay,
        generationMonth,
        getGenerationsByLastMonths,
      }}
    >
      {props.children}
    </CondominiumContext.Provider>
  );
}
