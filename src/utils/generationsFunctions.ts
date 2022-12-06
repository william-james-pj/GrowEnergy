import { DevicesType, GenerationType } from "../@types/types";

export const getAllGeneration = (
  devices: DevicesType[],
  allMonthGeneration: GenerationType[]
): number => {
  let stations = devices.map((e) => e.id);

  if (stations === undefined) return 0;

  let allgeneration = allMonthGeneration.filter((g) => {
    if (stations.includes(g.station)) {
      return Number(g.power);
    }
  });

  if (allgeneration.length === 0) return 0;

  let values = allgeneration.map((e) => Number(e.power));

  if (values.length === 1) return values[0];

  let all = values.reduce((a, b) => a! + b!);

  return all;
};

export const getAllGenerationDay = (
  allMonthGeneration: GenerationType[]
): number => {
  const today = new Date().getDate();
  let allgeneration = allMonthGeneration.filter((element) => {
    if (element.time.getDate() === today) {
      return true;
    }
    return false;
  });

  if (allgeneration.length === 0) return 0;

  let values = allgeneration.map((e) => Number(e.power));

  if (values.length === 0) return 0;

  if (values.length === 1) return values[0];

  let all = values.reduce((a, b) => a + b);

  return all;
};

export const getAllGenerationMonth = (
  allMonthGeneration: GenerationType[]
): number => {
  let powers = allMonthGeneration.map((e) => Number(e.power));
  if (powers.length === 0) return 0;
  let all = powers.reduce((a, b) => a + b);
  return all;
};

export const getDailyGenerationByStation = (
  stations: DevicesType[],
  generations: GenerationType[]
) => {
  let stationsId = stations.map((e) => e.id);

  if (stationsId === undefined) return 0;

  const today = new Date().getDate();
  let allgeneration = generations.filter((g) => {
    if (stationsId!.includes(g.station) && g.time.getDate() === today) {
      return true;
    }
    return false;
  });

  if (allgeneration.length === 0) return 0;

  let values = allgeneration.map((e) => Number(e.power));

  if (values.length === 1) {
    return values[0];
  }
  let all = values.reduce((a, b) => a! + b!);
  return all;
};

export const getLastGenerationByDay = (
  currentDate: Date,
  numberOFDays: number,
  generations: GenerationType[],
  stationId: string
): number[] => {
  let lastGeneration: number[] = [];

  let currentDay = currentDate.getDate();
  for (let i = numberOFDays - 1; i >= 0; i--) {
    let allgeneration = generations.filter((g) => {
      let dayAux = currentDate;
      dayAux.setDate(currentDay - i);

      if (stationId === g.station && g.time.getDate() === dayAux.getDate()) {
        return true;
      }
      return false;
    });

    if (allgeneration.length === 0) {
      lastGeneration.push(0);
      continue;
    }

    let values = allgeneration.map((e) => Number(e.power));

    lastGeneration.push(values[0]);
  }

  return lastGeneration;
};
