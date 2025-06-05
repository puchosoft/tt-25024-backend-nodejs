import userService from '../services/users.services.js'

const getAllUsers = (req, res) => {
    const users= userService.getAllUsers()
    res.status(200).json(users)

};

const createUser = (req, res) => {
    const {name, email}= req.body
    const newUser= userService.createUser({name,email})
    res.status(201).json(newUser)
};

export default { getAllUsers, createUser };
