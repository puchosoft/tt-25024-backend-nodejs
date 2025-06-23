// services
import User from "../models/user.model.js";
import db from "../config/db.js";
import createRandomUsers from '../utils/seedUser.js'
const getAll = () => {
  return db.users;
};

const findById = (id) => {
  return db.users.find((user) => user.id === id);
};
const create = (user) => {
  const newUser = new User({ id: user.id, name: user.name, email: user.email });
  db.users.push(newUser);
  return newUser;
};
const seedUsers=()=>{
// 
}

export default { getAll, findById,create };
