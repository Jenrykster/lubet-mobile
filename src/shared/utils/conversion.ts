export const toRealCurrency = (value: number) => {
  return 'R$ ' + value.toFixed(2).replace('.', ',');
};
