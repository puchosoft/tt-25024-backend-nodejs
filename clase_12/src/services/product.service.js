// services
// import ... from '../models/user.model.js'
import db from "../config/db.js";
const getAll = () => {
  return db.products;
};
const findById = (id) => {
  return db.products.find((product) => product.id === id);
};
export default { getAll, findById };
