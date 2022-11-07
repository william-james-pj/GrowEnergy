export const getMaxNumber = (value: number[]): number => {
  let max = Math.max.apply(Math, value);
  if (max < 100) {
    let total = max + 20;
    return Math.round(total / 10) * 10;
  }
  let total = max + 100;
  return Math.round(total / 100) * 100;
};

export const getMinNumber = (value: number[]): number => {
  let min = Math.min.apply(Math, value);
  if (min < 100) {
    let total = min - 20;
    return Math.round(total / 10) * 10;
  }
  let total = min - 100;
  return Math.round(total / 100) * 100;
};
