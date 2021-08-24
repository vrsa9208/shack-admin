export const mapCollectionResponse = (response) => {
  return Object.keys(response).map((key) => ({
    id: key,
    ...response[key],
  }));
};
