export const isUserAdmin = (user) => {
  if (user === undefined) {
    return false;
  }
  return user.permissions === "admin";
};
