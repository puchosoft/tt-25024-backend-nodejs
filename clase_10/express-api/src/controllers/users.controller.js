import userService from "../services/users.services.js";

const getAllUsers = (req, res) => {
  const users = userService.getAllUsers();
  res.status(200).json(users);
};

const createUser = (req, res) => {
  const { name, email } = req.body;
  try {
    if (!name || !email) {
      return res
        .status(400)
        .json({ message: "Todos lo campos son requeridos" });
    }
    const newUser = userService.createUser({ name, email });

    res.status(201).json(newUser);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error interno del servidor", error: error.message });
  }
};

export default { getAllUsers, createUser };
