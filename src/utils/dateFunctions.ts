import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { monthName } from "./monthName";

export type FirstAndLastDayType = {
  first: Date;
  lastDay: Date;
};

export const getDayOfWeek = (
  currentDate: Date,
  numberOFDays: number
): string[] => {
  let currentDay = currentDate.getDate();
  let dayOfWeek: string[] = [];

  for (let i = numberOFDays - 1; i >= 0; i--) {
    let dayAux = currentDate;
    dayAux.setDate(currentDay - i);
    dayOfWeek.push(format(dayAux, "EEEEEE", { locale: ptBR }));
  }

  return dayOfWeek;
};

export const getLastMonth = (
  currentDate: Date,
  numberOFMonth: number
): string[] => {
  let months: string[] = [];

  for (let i = numberOFMonth - 1; i >= 0; i--) {
    let monthAux = new Date(currentDate);
    monthAux.setMonth(monthAux.getMonth() - i);
    months.push(format(monthAux, "MMM", { locale: ptBR }));
  }

  return months;
};

export const getFirstAndLastDayOfLastMonth = (
  currentDate: Date,
  numberOFMonth: number
): FirstAndLastDayType[] => {
  let days: FirstAndLastDayType[] = [];

  for (let i = numberOFMonth - 1; i >= 0; i--) {
    let monthAux = new Date(currentDate);
    monthAux.setMonth(monthAux.getMonth() - i);
    days.push(getFirstAndLastDayOfMonth(monthAux));
  }

  return days;
};

export const getFirstAndLastDayOfMonth = (date: Date): FirstAndLastDayType => {
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  // firstDay.setHours(1);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  lastDay.setHours(22);

  return {
    first: firstDay,
    lastDay: lastDay,
  };
};
