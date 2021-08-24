export const mapShacksResponse = (response) => {
  return Object.keys(response).map((key) => ({
    id: key,
    ...response[key],
  }));
};
