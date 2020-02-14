import BaseServices from "../BaseService";

const currentUser =  JSON.parse(localStorage.getItem("currentUser")!);

export const authenticationService = {
  login,
  logout,
  currentUser,
};

async function login(username: string, password: string) {
  const data = {
    username,
    password,
    type_system: 2
  };
  const user = await BaseServices.request("auth/login", data, "POST");
  if (user && user.token) {
    localStorage.setItem("currentUser", JSON.stringify(user));
  }
  return user;
}

function logout() {
  localStorage.removeItem("currentUser");
}
