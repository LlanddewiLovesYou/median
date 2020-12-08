export const getPostIdFromPath = (path: string): string => {
  const pathArray = path.split("/");
  return pathArray[2];
};
