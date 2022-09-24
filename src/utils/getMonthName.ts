import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export const getMonthLongName = (date: Date) => {
  return format(date, "LLLL", {
    locale: ptBR,
  });
};

export const getMonthShortName = (date: Date) => {
  return format(date, "LLL", {
    locale: ptBR,
  });
};
