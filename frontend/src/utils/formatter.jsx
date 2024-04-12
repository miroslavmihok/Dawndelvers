const formatter = (value, currencySymbol) => {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: currencySymbol,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

export default formatter;
