import doorsDAO from "../dao/doors.dao.js";

const doorsController = {};

doorsController.insert = async (req, res) => {
    doorsDAO.insert(req.body)
        .then((result) => {
            res.json({
                data:{
                    data: result,
                    message: "Door inserted"
                }
            })
        })
        .catch((err) => {
            res.json({
                error: err
            })
        });
}

doorsController.getAll = async (req, res) => {
    doorsDAO.getAll()
        .then((doors) => {
            res.json({
                data: doors,
                message: "Doors listed"
            })
        })
        .catch((err) => {
            res.json({
                error: err
            })
        });
}

doorsController.getOne = async (req, res) => {
    doorsDAO.getOne(req.params.id)
        .then((door) => {
            res.json({
                data: door,
                message: "Door listed"
            })
        })
        .catch((err) => {
            res.json({
                error: err
            })
        });
}

doorsController.updateOne = async (req, res) => {
    doorsDAO.updateOne(req.params.id, req.body)
        .then((door) => {
            res.json({
                data: door,
                message: "Door updated"
            })
        })
        .catch((err) => {
            res.json({
                error: err
            })
        });
}

doorsController.deleteOne = async (req, res) => {
    doorsDAO.deleteOne(req.params.id)
        .then((door) => {
            res.json({
                data: door,
                message: "Door deleted"
            })
        })
        .catch((err) => {
            res.json({
                error: err
            })
        });
}

export default doorsController;