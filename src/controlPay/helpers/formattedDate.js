export const formattedDate = () => {
  const options = { day: "2-digit", month: "short", year: "numeric" };
  return new Date().toLocaleDateString("en-US", options);
};
