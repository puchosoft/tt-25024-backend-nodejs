// controller
import userService from "../services/user.service.js";
const getUsers = (req, res) => {
  try {
    const users = userService.getAll();
    if (users.length === 0)
      return res.status(200).json({ message: "No datos disponibles" });

    res.status(200).json({ message: "Listado de usuarios", payload: users });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error interno del servidor", error: error.message });
  }
};

const createUser = (req, res) => {
  const { name, email } = req.body;
  try {
    if (!name || !email) {
      return res.status(200).json({ message: "All fields are required" });
    }
    const newUser = userService.createUser({ name, email });
    console.log(newUser);
    res.status(201).json({ message: "user created", payload: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const seedUser=(req, res)=>{

}
export default { getUsers,createUser };
