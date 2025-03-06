import Door from "../models/Doors.js";

const doorsDAO = {};

doorsDAO.insert = async (door_id) => {
  return await Door.create(door_id);
}

doorsDAO.getAll = async () => {
  return await Door.find();
}

doorsDAO.getOne = async (id) => {
  return await Door.findById(id);
}

doorsDAO.updateOne = async (door_id, door) => {
  return await Door.findByIdAndUpdate({door_id:door_id}, door);
}

doorsDAO.deleteOne = async (door_id) => {
  return await Door.findByIdAndDelete(door_id);
}

export default doorsDAO;