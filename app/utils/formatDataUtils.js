
export const formatDate = (dateString) => {
  const date = new Date(dateString)
  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedDate = formatter.format(date);
  return formattedDate;
};
