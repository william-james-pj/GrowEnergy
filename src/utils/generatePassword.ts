export const generatePassword = (numberOfCharacters: number): string => {
  return Math.random().toString(36).slice(-numberOfCharacters);
};
