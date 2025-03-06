import usersDao from '../dao/users.dao.js';

const usersController = {};

usersController.createUser = (req, res) => {
    const user = req.body;
    usersDao.createUser(user).then((user) => {
        res.json({data:{
            data:user,
            message: 'User created successfully',
        }});
    });
}

usersController.getUsers = (req, res) => {
    usersDao.getUsers().then((users) => {
        res.json({data:{
            data:users,
            message: 'Users listed successfully',
        }});
    });
}

usersController.getUserById = (req, res) => {
    const { id } = req.params;
    usersDao.getUserById(id).then((user) => {
        res.json({data:{
            data:user,
            message: 'User listed successfully',
        }});
    });
}

usersController.updateUser = (req, res) => {
    const { id } = req.params;
    const user = req.body;
    usersDao.updateUser(id, user).then((user) => {
        res.json({data:{
            data:user,
            message: 'User updated successfully',
        }});
    });
}

usersController.deleteUser = (req, res) => {
    const { id } = req.params;
    usersDao.deleteUser(id).then((user) => {
        res.json({data:{
            data:user,
            message: 'User deleted successfully',
        }});
    });
}

export default usersController;

