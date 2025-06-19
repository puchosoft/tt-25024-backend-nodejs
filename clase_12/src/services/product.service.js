// services
// import ... from '../models/user.model.js'
import db from  '../config/db.js'
const getAll = () => {
  return db.products;
};

export default { getAll };
