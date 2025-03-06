import Users from "../models/Users.js";

const usersDao = {}

usersDao.getUsers = async () => {
    return await Users.find();
}

usersDao.getOne = async (id) => {
    return await Users.findById(id);
}

usersDao.createUser = async (user) => {
    return await Users.create(user);
}

usersDao.updateUser = async (id, user) => {
    return await Users.findByIdAndUpdate({user_id:id}, user);
}

usersDao.deleteUser = async (id) => {
    return await Users.findByIdAndDelete(id);
}

export default usersDao;