// persistencia en memoria
import { User } from "../models/users.model.js";
const users = [];

const getAllUsers = () => {
  return users;
};
const createUser = (user) => {
  const newUser = new User(user.name, user.email);
  users.push(newUser);
  return newUser;
};

export default { getAllUsers, createUser };
