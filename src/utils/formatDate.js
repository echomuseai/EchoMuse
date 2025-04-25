export const formatDate = (isoString) => {
  return new Date(isoString).toLocaleDateString();
};
