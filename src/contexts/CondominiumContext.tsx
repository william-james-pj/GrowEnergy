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
  getFirstAndLastDayOfMonth,
} from "../utils/dateFunctions";

type CondominiumContextType = {
  get: () => Promise<void>;
  condominiums: CondominiumsType[];
  getStationsById: (id: string) => Promise<DevicesType[]>;
  generationThisMonth: GenerationType[];
  generationDay: number;
  generationMonth: number;
  getGenerationsByDays: (
    currentDate: Date,
    stations: DevicesType[]
  ) => Promise<number[]>;
  getGenerationsByLastMonths: (
    currentDate: Date,
    numberOFMonth: number,
    stations: DevicesType[]
  ) => Promise<number[]>;
  getAllGenerationsByMonth: (
    stations: string[],
    date: FirstAndLastDayType
  ) => Promise<GenerationByMonthType>;
  getAllGenerationsByYear: (stations: string[], date: Date) => Promise<number>;
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

  const getStationsById = async (id: string): Promise<DevicesType[]> => {
    let aux: DevicesType[] = [];
    const q = query(
      collection(firestore, "stations"),
      where("condominium", "==", id)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      let data = doc.data();
      let newStation: DevicesType = {
        id: doc.id,
        condominium: data.condominium,
        name: data.name,
      };
      aux.push(newStation);
    });

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

  const getGenerationsByDays = async (
    currentDate: Date,
    stations: DevicesType[]
  ): Promise<number[]> => {
    let stationIds = stations.map((e) => e.id);

    if (stationIds === undefined) return [];
    const firstAndLastDay = getFirstAndLastDayOfMonth(currentDate);

    let generationAux: GenerationType[] = [];

    await Promise.all(
      stations.map(async (station) => {
        const q = query(
          collection(firestore, "values"),
          where("time", ">=", firstAndLastDay.first),
          where("time", "<=", firstAndLastDay.lastDay),
          where("station", "==", station.id)
        );

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          let data = doc.data();
          let newGeneration: GenerationType = {
            power: data.power,
            station: data.station,
            time: data.time.toDate(),
          };
          generationAux.push(newGeneration);
        });
      })
    );

    if (generationAux.length === 0) return [];

    let aux: number[] = [];

    aux.push(reduceArrayByDay(generationAux, 1));
    aux.push(reduceArrayByDay(generationAux, 7));
    aux.push(reduceArrayByDay(generationAux, 14));
    aux.push(reduceArrayByDay(generationAux, 21));
    aux.push(reduceArrayByDay(generationAux, 28));
    aux.push(
      reduceArrayByDay(generationAux, firstAndLastDay.lastDay.getDate())
    );

    return aux;
  };

  const reduceArrayByDay = (data: GenerationType[], day: number): number => {
    let days = data.filter((e) => e.time.getDate() === day);

    if (days.length === 0) return 0;

    let dayValues = days.map((e) => Number(e.power));

    if (dayValues.length === 0) return 0;

    if (dayValues.length === 1) return dayValues[0];

    let all = dayValues.reduce((a, b) => a + b);

    return all;
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

    generationAux.sort((a, b) => a.year - b.year || a.month - b.month);

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
      return {
        generation: 0,
        month: date.first.getMonth(),
        year: date.first.getFullYear(),
      };

    if (generationAux.length === 1)
      return {
        generation: generationAux[0],
        month: date.first.getMonth(),
        year: date.first.getFullYear(),
      };

    let generation = generationAux.reduce((a, b) => a + b);

    return {
      generation,
      month: date.first.getMonth(),
      year: date.first.getFullYear(),
    };
  };

  const getAllGenerationsByYear = async (
    stations: string[],
    date: Date
  ): Promise<number> => {
    let generationAux: number[] = [];

    const currentYear = date.getFullYear();
    const firstDay = new Date(currentYear, 0, 1);
    const lastDay = new Date(currentYear, 11, 31);

    await Promise.all(
      stations.map(async (id) => {
        const q = query(
          collection(firestore, "values"),
          where("time", ">=", firstDay),
          where("time", "<=", lastDay),
          where("station", "==", id)
        );

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          let data = doc.data();
          generationAux.push(Number(data.power));
        });
      })
    );

    if (generationAux.length === 0) return 0;

    if (generationAux.length === 1) return generationAux[0];

    let generation = generationAux.reduce((a, b) => a + b);

    return generation;
  };

  return (
    <CondominiumContext.Provider
      value={{
        get,
        condominiums,
        getStationsById,
        generationThisMonth,
        generationDay,
        generationMonth,
        getGenerationsByDays,
        getGenerationsByLastMonths,
        getAllGenerationsByMonth,
        getAllGenerationsByYear,
      }}
    >
      {props.children}
    </CondominiumContext.Provider>
  );
}
