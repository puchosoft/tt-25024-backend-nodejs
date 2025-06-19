// services
// import ... from '../models/user.model.js'
import db from  '../config/db.js'
const getAll = () => {
  return db.users;
};

const findById= (id)=>{
  return db.users.find((user) => user.id === id);
}

export default { getAll,findById };
