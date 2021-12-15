export const KFormatter = (num) => {
  let formatter = Intl.NumberFormat("en", { notation: "compact" });
  return formatter.format(num);
};
