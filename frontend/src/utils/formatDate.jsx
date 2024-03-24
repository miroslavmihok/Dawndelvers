export const formatDate = (date) => {
  const originalDate = new Date(date);
  const day = String(originalDate.getUTCDate()).padStart(2, "0");
  const month = String(originalDate.getUTCMonth() + 1).padStart(2, "0");
  const year = originalDate.getUTCFullYear();

  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
};
